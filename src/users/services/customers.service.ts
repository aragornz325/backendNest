import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { ProductsService } from 'src/products/services/products.service';
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';
import { User } from '../entities/user.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
  ) {}

  findAll() {
    return this.customerRepo.find();
  }

  async findOne(id: number) {
    const customer = await this.customerRepo.findOne(id);
    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  create(data: CreateCustomerDto) {
    const newCustomer = this.customerRepo.create(data);
    return this.customerRepo.save(newCustomer);
  }

  async update(id: number, changes: UpdateCustomerDto) {
    const customerUp = await this.customerRepo.findOne(id);
    if (!customerUp) {
      throw new NotFoundException(`there is no customer ${id}`);
    }
    this.customerRepo.merge(customerUp, changes);
    return this.customerRepo.save(customerUp);
  }

  remove(id: number) {
    return this.customerRepo.delete(id);
  }
}
