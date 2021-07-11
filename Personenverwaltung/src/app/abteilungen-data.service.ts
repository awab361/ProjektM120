import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbteilungenDataService {
  abteilungen = [
    {
      abteilung: "Informatik",
      anzahlbueros: 4
    },
    {
      abteilung: "Sekretariat",
      anzahlbueros: 3
    },
    {
      abteilung: "Weiterbildung",
      anzahlbueros: 12
    },
    {
      abteilung: "Grundausbildung",
      anzahlbueros: 14
    },
    {
      abteilung: "Rektorat",
      anzahlbueros: 3
    },
    {
      abteilung: "Finanzen und Dienste",
      anzahlbueros: 21
    },

  ]
  constructor() { }

  getAbteilungen (){
    return this.abteilungen;
  }
}
