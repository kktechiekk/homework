import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  getBooksData(){
    return this.http.get('https://s3.amazonaws.com/api-fun/books.json');
  }

}
