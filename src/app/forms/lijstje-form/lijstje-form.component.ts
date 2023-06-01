import { Component } from '@angular/core';
import { Artikel } from 'src/app/model/artikel';

@Component({
  selector: 'app-lijstje-form',
  templateUrl: './lijstje-form.component.html',
  styleUrls: ['./lijstje-form.component.css']
})
export class LijstjeFormComponent {
  sortedArtikelen: Artikel[] = [];
  artikelen: Artikel[] = [];
  artikelService: any;
  ngOnInit(): void { this.getAll(); }
  getAll() {
    this.artikelService.getAll().subscribe(
        (data: Artikel[]) => {
        this.artikelen  = data
        this.sortedArtikelen = this.artikelen.sort((a,b)=>-a.prio.localeCompare(b.prio))
      }
    )}
 
}
