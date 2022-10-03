import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';

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
}
