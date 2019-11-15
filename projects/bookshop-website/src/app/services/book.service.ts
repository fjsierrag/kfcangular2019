import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../models/book";
import {Observable} from "rxjs";

const BOOKS_URL= "https://immense-forest-87642.herokuapp.com/books";
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(BOOKS_URL);
  }

  getBookById(id: number): Observable<Book>{
    return this.http.get<Book>(`${BOOKS_URL}/${id}`);
  }

  removeBook(id: number): Observable<any>{
    return  this.http.delete<any>(`${BOOKS_URL}/${id}`);
  }

  createBook(book: Book):Observable<Book>{
    return this.http.post<Book>(`${BOOKS_URL}`, book);
  }
}

