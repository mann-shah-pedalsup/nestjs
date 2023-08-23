import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CustomerDto } from 'src/customers/dtos/customer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get(':id')
  getCustomerById(@Res() res: Response, @Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) {
      res.send(customer);
    } else {
      throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  getCustomer(@Res() res: Response) {
    const customer = this.customersService.findCustomer();
    if (customer) {
      res.send(customer);
    } else {
      throw new HttpException('Customers not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  createCustomer(@Body() customerDto: CustomerDto) {
    this.customersService.newCustomer(customerDto);
  }
  // @Get('')
  // getCustomer() {
  //   return 'Server connected successfully';
  // }
}
