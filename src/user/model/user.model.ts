import {
  Column,
  Model,
  Table,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  HasMany,
  IsEmail,
} from 'sequelize-typescript';
import { Book } from '../../book/model/book.model';
import { Order } from '../../order/model/order.model';

@Table
export class User extends Model {
  @AllowNull(false)
  @IsEmail
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

  @HasMany(() => Book)
  books: Book[];

  @HasMany(() => Order)
  orders: Order[];
}
