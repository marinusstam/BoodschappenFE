import { Component, Input, OnInit } from '@angular/core';
import { Artikel } from 'src/app/model/artikel';
import { ArtikelListComponent } from 'src/app/lists/artikel-list/artikel-list.component';
import { ArtikelService } from 'src/app/services/Artikel/artikel.service';

@Component({
  selector: 'app-artikel-form',
  templateUrl: './artikel-form.component.html',
  styleUrls: ['./artikel-form.component.css']
})
export class ArtikelFormComponent implements OnInit {
  boodschappen = new Artikel();
  // @Input() artikelList!: ArtikelListComponent;
  constructor(public artikelService: ArtikelService) { }
  add() {
    this.artikelService.save(this.boodschappen).subscribe(
      () => this.getAll()
    )
  }
  sortedArtikelen: Artikel[] = [];
  artikelen: Artikel[] = [];
  ngOnInit(): void { this.getAll(); }
    getAll() {
    this.artikelService.getAll().subscribe(
      data => {
        this.artikelen  = data
        this.sortedArtikelen = this.artikelen.sort((a,b)=>-a.prio.localeCompare(b.prio))
      }
    )}
  delete(id: number) {
    this.artikelService.delete(id).subscribe(
      () => this.getAll()
    )}
}
