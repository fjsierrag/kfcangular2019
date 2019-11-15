import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {Book} from "../../models/book";
import {AuthService} from "../../services/auth.service";
import {BookService} from "../../services/book.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.scss']
})
export class AdminBookComponent implements OnInit {
  book: Book = {
    id: null, author: "", price: 0, rating: 5, reviews: 0, title:''
  };
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  save(form: NgForm){
    if(form.valid){
      // Primera forma
      // let newUser=this.authService.register(this.user).toPromise();

      //Segunda Forma
      this.bookService.createBook(this.book).subscribe((book: Book)=>{
        this.router.navigate(['admin-books']);
        //this.router.navigateByUrl('/login');
      });
    }

  }
}
