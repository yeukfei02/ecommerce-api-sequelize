import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from '../book/model/book.model';
import { Shop } from '../shop/model/shop.model';
import { User } from '../user/model/user.model';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book,
  ) {}

  async createBook(
    name: string,
    author: string,
    price: number,
    quantity: number,
    shop_id: number,
    user_id: number,
  ): Promise<Book> {
    const book = await this.bookModel.create({
      name: name,
      author: author,
      price: price,
      quantity: quantity,
      shop_id: shop_id,
      user_id: user_id,
    });
    return book;
  }

  async getBooks() {
    const books = await this.bookModel.findAll({
      include: [Shop, User],
    });
    return books;
  }

  async getBookById(id: number) {
    const book = await this.bookModel.findOne({
      where: { id: id },
      include: [Shop, User],
    });
    return book;
  }

  async updateBookById(
    id: number,
    name: string,
    author: string,
    price: number,
    quantity: number,
    shop_id: number,
    user_id: number,
  ) {
    await this.bookModel.update(
      {
        name: name,
        author: author,
        price: price,
        quantity: quantity,
        shop_id: shop_id,
        user_id: user_id,
      },
      {
        where: {
          id: id,
        },
      },
    );
  }

  async deleteBookById(id: number) {
    await this.bookModel.destroy({
      where: {
        id: id,
      },
    });
  }
}
