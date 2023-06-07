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
  errorMessages = " ";
  // @Input() artikelList!: ArtikelListComponent;
  constructor(public artikelService: ArtikelService) { }
  add() {
    this.artikelService.save(this.boodschappen).subscribe
    (
      () => {this.getAll()
      this.errorMessages = " ", 
      // this.boodschappen.naam =  " ",
      // this.boodschappen.omschrijving = "  ",
      // this.boodschappen.prio = "J", 
      this.boodschappen.categorie = " "
      },
      error=>this.errorMessages=error.error
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
