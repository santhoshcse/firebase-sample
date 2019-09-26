import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public books: Observable<any[]>;

  private bookCounter = 0;

  constructor(public firestore: AngularFirestore) {
      this.books = this.firestore.collection<Book>('/books').valueChanges();
  }

  add() {
    this.firestore
    .collection('books')
    .add({ title: 'book ' + this.bookCounter++ })
    .then(res => {}, err => reject(err));
  }

  delete(book) {
    this.firestore
    .collection('books')
    .doc(book.payload.doc.id)
    .delete();
  }

  get() {
    // TODO
  }

  update() {
    // TODO
  }
}

class Book {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}