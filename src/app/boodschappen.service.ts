import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Artikel } from 'src/app/model/artikel';

@Injectable({
  providedIn: 'root'
})
export class BoodschappenService {
  constructor(public http: HttpClient) { }
  getAll() {
    return this.http.get<Artikel[]>(
      'http://localhost:8080/artikel');
  }
  save(boodschappen: Artikel) {
    return this.http.post(
      'http://localhost:8080/artikel', boodschappen);
  }
  delete(id: number) {
    return this.http.delete(
      'http://localhost:8080/artikel/' + id);
  }
}
