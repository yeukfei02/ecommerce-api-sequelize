import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
import { Shop } from './model/shop.model';

@Module({
  imports: [SequelizeModule.forFeature([Shop])],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
