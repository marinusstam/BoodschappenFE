import { Component } from '@angular/core';
import { Lijstje } from 'src/app/model/lijstje';
import { LijstjeService } from 'src/app/services/Lijstje/lijstje.service';

@Component({
  selector: 'app-lijstje-form',
  templateUrl: './lijstje-form.component.html',
  styleUrls: ['./lijstje-form.component.css']
})
export class LijstjeFormComponent {
  sortedLijstjes: Lijstje[] = [];
  constructor(public lijstjesService: LijstjeService) { }
  lijstjes: Lijstje[] = [];
  ngOnInit(): void { this.getAll(); }
  getAll() {
    this.lijstjesService.getAll().subscribe(
        (data: Lijstje[]) => {
        this.lijstjes  = data
        this.sortedLijstjes = this.lijstjes.sort(
          (a,b)=>a.naam.localeCompare(b.naam) || a.categorie.localeCompare(b.categorie))
      }
    )}
}

