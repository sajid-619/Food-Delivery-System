import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async create(order: any): Promise<any> {
    return await this.orderRepository.insert(order);
  }

  async findOne(id: string): Promise<any> {
    return await this.orderRepository.findOne(id);
  }
}