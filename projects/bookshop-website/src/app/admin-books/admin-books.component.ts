import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss']
})
export class AdminBooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.loadBooks();
  }

  async loadBooks() {
    this.books = await this.bookService.getBooks().toPromise();
    console.log(this.books);
  }

  async removeBook(id){
    const eliminar = await this.bookService.removeBook(parseInt(id)).subscribe(estado=>{
      console.log(estado);
      return {estado:1};
    });

    console.log(eliminar);
  }
}
