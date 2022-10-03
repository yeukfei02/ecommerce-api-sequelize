import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('/api/orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    if (
      createOrderDto.order_detail &&
      createOrderDto.shop_id &&
      createOrderDto.user_id
    ) {
      const order = await this.orderService.createOrder(
        createOrderDto.order_detail,
        createOrderDto.shop_id,
        createOrderDto.user_id,
      );

      const response = {
        message: 'createOrder',
        order: order,
      };
      return response;
    }
  }

  @Get()
  async getOrders() {
    const orders = await this.orderService.getOrders();

    const response = {
      message: 'getOrders',
      orders: orders,
    };
    return response;
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    const idNum = parseInt(id, 10);
    const order = await this.orderService.getOrderById(idNum);

    const response = {
      message: 'getOrder',
      order: order,
    };
    return response;
  }
}
