import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
import bcrypt from 'bcryptjs';

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
    });
    if (user) {
      const isValidPassword = bcrypt.compareSync(password, user.password);
      if (isValidPassword) {
        result = user;
      }
    }

    return result;
  }
}
