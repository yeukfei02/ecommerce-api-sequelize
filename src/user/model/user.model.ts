import {
  Column,
  Model,
  Table,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from 'sequelize-typescript';
import { Shop } from '../../shop/model/shop.model';
import { Book } from '../../book/model/book.model';
import { Order } from '../../order/model/order.model';

@Table
export class User extends Model {
  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @HasMany(() => Shop)
  shops: Shop[];

  @HasMany(() => Book)
  books: Book[];

  @HasMany(() => Order)
  orders: Order[];
}
