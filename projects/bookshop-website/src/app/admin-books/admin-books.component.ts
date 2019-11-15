import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book";
import {BookService} from "../services/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss']
})
export class AdminBooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.loadBooks();
  }

  async loadBooks() {
    this.books = await this.bookService.getBooks().toPromise();
    console.log(this.books);
  }

  async removeBook(id){
    const eliminar = await this.bookService.removeBook(parseInt(id)).subscribe(()=>{
      this.loadBooks();
    });

    console.log(eliminar);
  }
}
