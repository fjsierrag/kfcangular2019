import {Component, OnInit} from '@angular/core';
import {BookService} from "../services/book.service";
import {Book} from "../models/book";

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
    books: Book[] = [];

    constructor(private bookService: BookService) {
    }

    ngOnInit() {
      this.loadBooks();
    }

    async loadBooks() {
        this.books = await this.bookService.getBooks().toPromise();
        console.log(this.books);
    }
}
