import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from '../../user/model/user.model';
import { Shop } from '../../shop/model/shop.model';

@Table
export class Order extends Model {
  @Column
  order_detail: string;

  @ForeignKey(() => Shop)
  @Column
  shop_id: number;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;

  @BelongsTo(() => Shop)
  shop: Shop;

  @BelongsTo(() => User)
  user: User;
}
