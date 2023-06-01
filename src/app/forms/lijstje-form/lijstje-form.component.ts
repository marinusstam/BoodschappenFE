import { Component } from '@angular/core';
import { Boodschappen } from 'src/app/boodschappen';

@Component({
  selector: 'app-lijstje-form',
  templateUrl: './lijstje-form.component.html',
  styleUrls: ['./lijstje-form.component.css']
})
export class LijstjeFormComponent {
  sortedArtikelen: Boodschappen[] = [];
  artikelen: Boodschappen[] = [];
  artikelService: any;
  ngOnInit(): void { this.getAll(); }
  getAll() {
    this.artikelService.getAll().subscribe(
        (data: Boodschappen[]) => {
        this.artikelen  = data
        this.sortedArtikelen = this.artikelen.sort((a,b)=>-a.prio.localeCompare(b.prio))
      }
    )}
 
}
