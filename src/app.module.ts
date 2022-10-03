import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ShopModule } from './shop/shop.module';
import { BookModule } from './book/book.module';
import { OrderModule } from './order/order.module';
import { User } from './user/model/user.model';
import { Shop } from './shop/model/shop.model';
import { Book } from './book/model/book.model';
import { Order } from './order/model/order.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.PORT_NUMBER, 10),
      username: process.env.USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, Shop, Book, Order],
      autoLoadModels: true,
      synchronize: true,
    }),
    UserModule,
    ShopModule,
    BookModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
