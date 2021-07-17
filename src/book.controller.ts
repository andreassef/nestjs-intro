import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Book } from './Book.model';
import { BookService } from './Products.service';

@Controller('books')
export class BooksController {
  constructor(private bookService: BookService) {}

  @Get()
  async getAll(): Promise<Book[]> {
    return await this.bookService.getAll();
  }

  @Get(':id')
  async getOne(@Param() id: number): Promise<Book> {
    return await this.bookService.getOne(id);
  }

  @Post()
  async create(@Body() book: Book): Promise<void> {
    return await this.bookService.create(book);
  }
}
