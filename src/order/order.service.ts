import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from '../order/model/order.model';
import { Shop } from '../shop/model/shop.model';
import { User } from '../user/model/user.model';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order)
    private orderModel: typeof Order,
  ) {}

  async createOrder(
    order_detail: string,
    shop_id: number,
    user_id: number,
  ): Promise<Order> {
    const order = await this.orderModel.create({
      order_detail: order_detail,
      shop_id: shop_id,
      user_id: user_id,
    });
    return order;
  }

  async getOrders() {
    const orders = await this.orderModel.findAll({
      include: [Shop, User],
    });
    return orders;
  }

  async getOrderById(id: number) {
    const order = await this.orderModel.findOne({
      where: { id: id },
      include: [Shop, User],
    });
    return order;
  }
}
