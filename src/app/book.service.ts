import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public firestore: AngularFirestore) { }

  addBook(book : Book) {
    this.firestore
    .collection('books')
    .add(book)
    .then(res => {}, err => reject(err));
  }

  getBook(bookId) {
    // TODO
  }

  getBooks() {
    return this.firestore.collection<Book>('/books').valueChanges();
  }

  deleteBook(bookId) {
    this.firestore
    .collection('books')
    // .doc(book.payload.doc.id)
    .doc(bookId)
    .delete();
  }

  updateBook(book : Book) {
    // TODO
  }
}

export interface Book {
  title: string;
}