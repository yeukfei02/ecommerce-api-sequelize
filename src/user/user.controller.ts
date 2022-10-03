import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async signup(@Body() signupDto: SignupDto) {
    if (signupDto.email && signupDto.password) {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(signupDto.password, salt);

      const user = await this.userService.signup(
        signupDto.email,
        hashedPassword,
      );

      const response = {
        message: 'signup',
        user: user,
      };
      return response;
    }
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    let response = {
      message: 'login',
      user: {},
      token: '',
    };

    if (loginDto.email && loginDto.password) {
      const user = await this.userService.login(
        loginDto.email,
        loginDto.password,
      );
      if (user) {
        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET,
        );

        response = {
          message: 'login',
          user: user,
          token: token,
        };
      }
    }

    return response;
  }
}
