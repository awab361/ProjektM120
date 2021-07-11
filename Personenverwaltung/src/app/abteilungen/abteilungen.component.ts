import { Component, OnInit } from '@angular/core';
import { AbteilungenDataService } from '../abteilungen-data.service';

@Component({
  selector: 'app-abteilungen',
  templateUrl: './abteilungen.component.html',
  styleUrls: ['./abteilungen.component.css']
})
export class AbteilungenComponent implements OnInit {

  // The object for each abteilung
  abteilungen = [
    {
      abteilung: "",
      anzahlbueros: 0
    }
  ]

  // The visibility bools
  menuVisible = true;
  commingSoonVisible = false;
  abteilungenListVisible = false;

  // The constructor to define the Dependency Injection
  constructor(private abteilungdata: AbteilungenDataService) { 
    this.abteilungen = abteilungdata.getAbteilungen();
  }

  ngOnInit(): void {
  }

}
