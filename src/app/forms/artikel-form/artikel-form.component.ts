import { Component, Input, OnInit } from '@angular/core';
import { Boodschappen } from 'src/app/boodschappen';
import { BoodschappenService } from 'src/app/boodschappen.service';
import { ArtikelListComponent } from 'src/app/lists/artikel-list/artikel-list.component';

@Component({
  selector: 'app-artikel-form',
  templateUrl: './artikel-form.component.html',
  styleUrls: ['./artikel-form.component.css']
})
export class ArtikelFormComponent implements OnInit {
  boodschappen = new Boodschappen();
  @Input() artikelList!: ArtikelListComponent;
  constructor(public artikelService: BoodschappenService) { }
  ngOnInit(): void {}
  add() {
    this.artikelService.save(this.boodschappen).subscribe(
      () => this.artikelList.getAll()
    )
  }
}
