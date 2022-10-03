import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shop } from './model/shop.model';

@Injectable()
export class ShopService {
  constructor(
    @InjectModel(Shop)
    private shopModel: typeof Shop,
  ) {}

  async createShop(name: string, address: string) {
    const shop = await this.shopModel.create({ name: name, address: address });
    return shop;
  }

  async getShops() {
    const shops = await this.shopModel.findAll();
    return shops;
  }

  async getShopById(id: number) {
    const shop = await this.shopModel.findOne({ where: { id: id } });
    return shop;
  }

  async updateShopById(id: number, name: string, address: string) {
    await this.shopModel.update(
      { name: name, address: address },
      {
        where: {
          id: id,
        },
      },
    );
  }

  async deleteShopById(id: number) {
    await this.shopModel.destroy({
      where: {
        id: id,
      },
    });
  }
}
