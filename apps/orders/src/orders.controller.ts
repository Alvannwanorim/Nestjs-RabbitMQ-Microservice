import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-oder.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() request: CreateOrderRequest) {
    return this.ordersService.createOder(request);
  }
  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }
}
