import { Component, OnInit } from '@angular/core';
import { Artikel } from 'src/app/model/artikel';
import { ArtikelService } from 'src/app/services/Artikel/artikel.service';

@Component({
  selector: 'app-artikel-list',
  templateUrl: './artikel-list.component.html',
  styleUrls: ['./artikel-list.component.css']
})
export class ArtikelListComponent implements OnInit {
  artikelen: Artikel[] = [];
  ngOnInit(): void { this.getAll(); }
  constructor(public artikelService: ArtikelService) {}
  getAll() {
    this.artikelService.getAll().subscribe(
      data => this.artikelen = data
    )}
  delete(id: number) {
    this.artikelService.delete(id).subscribe(
      () => this.getAll()
    )}
}
