import { Injectable } from '@nestjs/common';
import { CustomerDto } from 'src/customers/dtos/customer.dto';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      name: 'Mann',
      email: 'mann@gmail.com',
    },
    {
      id: 2,
      name: 'John',
      email: 'john@gmail.com',
    },
    {
      id: 3,
      name: 'Peter',
      email: 'peter@gmail.com',
    },
  ];
  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  findCustomer() {
    return this.users;
  }
  newCustomer(customerDto: CustomerDto) {
    this.users.push(customerDto);
  }
}
