import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Artikel } from '../../model/artikel';

@Injectable({
  providedIn: 'root'
})
export class ArtikelService {
  constructor(public http: HttpClient) { }
  getAll() {
    return this.http.get<Artikel[]>(
      'http://localhost:8080/artikelen');
  }
  getOne(id: number){
    return this.http.get<Artikel>(
      'http://localhost:8080/artikel/' + id);
  }
  getLijst(ids: number[]) {
    return this.http.post<Artikel[]>(
      'http://localhost:8080/lijstArtikelen', ids);
  }

  delete(id: number) {
    return this.http.delete(
      'http://localhost:8080/artikel/' + id);
  }

  save(artikel: Artikel) {
    return this.http.post(
      'http://localhost:8080/artikel', artikel);
  }

}
