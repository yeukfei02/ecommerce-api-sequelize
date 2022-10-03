import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from './dto/signup.dto';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async signup(@Body() signupDto: SignupDto) {
    if (signupDto.email && signupDto.password) {
      const user = await this.userService.signup(
        signupDto.email,
        signupDto.password,
      );

      const response = {
        message: 'signup',
        user: user,
      };
      return response;
    }
  }
}
