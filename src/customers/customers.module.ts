import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomerDetailsController } from './controllers/customer-details/customer-details.controller';
import { CustomersService } from './services/customers/customers.service';
import { CustomerDetailsService } from './services/customer-details/customer-details.service';

@Module({
  controllers: [CustomersController, CustomerDetailsController],
  providers: [CustomersService, CustomerDetailsService],
})
export class CustomersModule {}
