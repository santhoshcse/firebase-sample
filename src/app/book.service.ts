import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public firestore: AngularFirestore) { }

  addBook(book) {
    // TODO
  }

  getBook(bookId) {
    // TODO
  }

  getBooks() {
    // TODO
  }

  deleteBook(bookId) {
    // TODO
  }

  updateBook(book) {
    // TODO
  }
}
