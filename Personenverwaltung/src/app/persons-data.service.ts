import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsDataService {
// Da sind alle Datensätze aufgelistet, wir haben es da Codiert im code da wir keinen Backend haben
  persons = [
    {
      name: "Llorente",
      firstName: "mark",
      birthdate: "12.05.2002",
      joinDate: "15.10.2009",
      bankNum: 124338843,
      sellary: 1225,
      street: "HighwayStreet",
      plz: 4000, 
      city: "Chur",
      email:"Llorente@mark.ch"
    },
    {
      name: "Chiellini",
      firstName: "Markus",
      birthdate: "05.05.1998",
      joinDate: "14.08.2018",
      bankNum: 75845345,
      sellary: 5244,
      street: "Bradway",
      plz: 5875, 
      city: "Bern",
      email:"Chiellini.Markus@gmx.ch"
    },
    {
      name: "Caldara",
      firstName: "Mattia",
      birthdate: "14.03.1984",
      joinDate: "15.02.20",
      bankNum: 344354443,
      sellary: 3233,
      street: "AspermontStreet",
      plz: 4227, 
      city: "Wallis",
      email:"Caldara.Mattia@gmail.com"
    },
    {
      name: "Hubert",
      firstName: "Mathu",
      birthdate: "25.02.1948",
      joinDate: "15.04.2020",
      bankNum: 3435424,
      sellary: 2443,
      street: "WiesentalStreet",
      plz: 2443, 
      city: "Landquart",
      email:"HubertMathu22@yahoo.com"
    },
    {
      name: "Arnautovic",
      firstName: "Dzeko",
      birthdate: "30.12.1998",
      joinDate: "15.01.2021",
      bankNum: 75845345,
      sellary: 5244,
      street: "AspermontStreet",
      plz: 4227, 
      city: "Wallis",
      email:"Arnautovic2332@zmail.com"
    },
  ];

  constructor() { }
// Alle Personen werden mit dieser Funktion exportiert
  getPersons() {
    return this.persons;
  }
}
