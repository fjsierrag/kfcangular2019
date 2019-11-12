import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../services/book.service";
import {Observable} from "rxjs";
import {Book} from "../../models/book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book>;
  constructor(private route: ActivatedRoute, private bookService:BookService ) { }


  ngOnInit() {
    //Una forma de obtener el id  this.route.snapshot.paramMap
    const { id } = this.route.snapshot.params;
    this.book$ = this.bookService.getBookById(parseInt(id));

  }

}
