import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './Book.model';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book,
  ) {}

  async create(book: Book): Promise<void> {
    await this.bookModel.create(book);
  }

  async getAll(): Promise<Book[]> {
    return await this.bookModel.findAll();
  }

  async getOne(id: number): Promise<Book> {
    return await this.bookModel.findByPk(id);
  }

  async updateBook(book: Book): Promise<[number, Book[]]> {
    return await this.bookModel.update(book, {
      where: {
        id: book.id,
      },
    });
  }

  async deleteBook(id: number) {
    const livro: Book = await this.getOne(id);
    livro.destroy();
  }
}
