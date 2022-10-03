import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  HasMany,
} from 'sequelize-typescript';
import { Book } from '../../book/model/book.model';
import { Order } from '../../order/model/order.model';

@Table
export class Shop extends Model {
  @Column
  name: string;

  @Column
  address: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @HasMany(() => Book)
  books: Book[];

  @HasMany(() => Order)
  orders: Order[];
}
