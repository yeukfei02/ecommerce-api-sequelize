import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getMain() {
    const data = {
      message: 'ecommerce-api-sequelize',
    };
    return data;
  }
}
