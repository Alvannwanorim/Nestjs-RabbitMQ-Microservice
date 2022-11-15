import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-oder.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}
  public async createOder(request: CreateOrderRequest) {
    return await this.ordersRepository.create(request);
  }
}
