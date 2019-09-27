import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService, Book } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public books: Observable<Book[]>;

  private bookCounter = 0;

  constructor(
    public bookService: BookService) {
      this.books = this.bookService.getBooks();
  }

  add() {
    let book : Book = { title: 'book ' + this.bookCounter++ };
    this.bookService.addBook(book);
  }

  delete(book : Book) {
    this.bookService.deleteBook(book);
  }

  get(bookId : string) {
    this.bookService.getBook(bookId);
  }

  update(book : Book) {
    this.bookService.updateBook(book);
  }
}