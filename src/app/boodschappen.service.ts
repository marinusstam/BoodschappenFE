import { Injectable } from '@angular/core';
import { Artikel } from './model/artikel';
import {HttpClient} from "@angular/common/http";
import { Boodschappen } from './boodschappen';

@Injectable({
  providedIn: 'root'
})
export class BoodschappenService {
  constructor(public http: HttpClient) { }
  getAll() {
    return this.http.get<Boodschappen[]>(
      'http://localhost:8081/artikel');
  }
  save(boodschappen: Boodschappen) {
    return this.http.post(
      'http://localhost:8081/artikel', boodschappen);
  }
  delete(id: number) {
    return this.http.delete(
      'http://localhost:8081/artikel/' + id);
  }
}
