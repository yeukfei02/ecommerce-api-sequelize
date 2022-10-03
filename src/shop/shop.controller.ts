import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopByIdDto } from './dto/update-shop-by-id.dto';

@Controller('/api/shops')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  async signup(@Body() createShopDto: CreateShopDto) {
    if (createShopDto.name && createShopDto.address) {
      const shop = await this.shopService.createShop(
        createShopDto.name,
        createShopDto.address,
      );

      const response = {
        message: 'createShop',
        shop: shop,
      };
      return response;
    }
  }

  @Get()
  async getShops() {
    const shops = await this.shopService.getShops();

    const response = {
      message: 'getShops',
      shops: shops,
    };
    return response;
  }

  @Get(':id')
  async getShopById(@Param('id') id: string) {
    const idNum = parseInt(id, 10);
    const shop = await this.shopService.getShopById(idNum);

    const response = {
      message: 'getShop',
      shop: shop,
    };
    return response;
  }

  @Put(':id')
  async updateShopById(
    @Param('id') id: string,
    @Body() updateShopByIdDto: UpdateShopByIdDto,
  ) {
    const idNum = parseInt(id, 10);
    const name = updateShopByIdDto.name;
    const address = updateShopByIdDto.address;
    await this.shopService.updateShopById(idNum, name, address);

    const response = {
      message: 'updateShopById',
    };
    return response;
  }

  @Delete(':id')
  async deleteShopById(@Param('id') id: string) {
    const idNum = parseInt(id, 10);

    await this.shopService.deleteShopById(idNum);

    const response = {
      message: 'deleteShopById',
    };
    return response;
  }
}
