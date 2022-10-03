import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookByIdDto } from './dto/update-book-by-id.dto';

@Controller('/api/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async createBook(@Body() createBookDto: CreateBookDto) {
    if (
      createBookDto.name &&
      createBookDto.author &&
      createBookDto.price > 0 &&
      createBookDto.quantity > 0 &&
      createBookDto.shop_id &&
      createBookDto.user_id
    ) {
      const book = await this.bookService.createBook(
        createBookDto.name,
        createBookDto.author,
        createBookDto.price,
        createBookDto.quantity,
        createBookDto.shop_id,
        createBookDto.user_id,
      );

      const response = {
        message: 'createBook',
        book: book,
      };
      return response;
    }
  }

  @Get()
  async getBooks() {
    const books = await this.bookService.getBooks();

    const response = {
      message: 'getBooks',
      books: books,
    };
    return response;
  }

  @Get(':id')
  async getBookById(@Param('id') id: string) {
    const idNum = parseInt(id, 10);
    const book = await this.bookService.getBookById(idNum);

    const response = {
      message: 'getBook',
      book: book,
    };
    return response;
  }

  @Put(':id')
  async updateBookById(
    @Param('id') id: string,
    @Body() updateBookByIdDto: UpdateBookByIdDto,
  ) {
    const idNum = parseInt(id, 10);
    const name = updateBookByIdDto.name;
    const author = updateBookByIdDto.author;
    const price = updateBookByIdDto.price;
    const quantity = updateBookByIdDto.quantity;
    const shop_id = updateBookByIdDto.shop_id;
    const user_id = updateBookByIdDto.user_id;
    await this.bookService.updateBookById(
      idNum,
      name,
      author,
      price,
      quantity,
      shop_id,
      user_id,
    );

    const response = {
      message: 'updateBookById',
    };
    return response;
  }

  @Delete(':id')
  async deleteBookById(@Param('id') id: string) {
    const idNum = parseInt(id, 10);

    await this.bookService.deleteBookById(idNum);

    const response = {
      message: 'deleteBookById',
    };
    return response;
  }
}
