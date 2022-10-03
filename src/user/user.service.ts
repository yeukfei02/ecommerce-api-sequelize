import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
import bcrypt from 'bcryptjs';
import { Book } from '../book/model/book.model';
import { Order } from '../order/model/order.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async signup(email: string, password: string) {
    const user = await this.userModel.create({
      email: email,
      password: password,
    });
    return user;
  }

  async login(email: string, password: string) {
    let result = null;

    const user = await this.userModel.findOne({
      where: { email: email },
      include: [Book, Order],
    });
    if (user) {
      const isValidPassword = bcrypt.compareSync(password, user.password);
      if (isValidPassword) {
        result = user;
      }
    }

    return result;
  }

  async getUsers() {
    const users = await this.userModel.findAll({ include: [Book, Order] });
    return users;
  }

  async getUserById(id: number) {
    const user = await this.userModel.findOne({
      where: { id: id },
      include: [Book, Order],
    });
    return user;
  }
}
