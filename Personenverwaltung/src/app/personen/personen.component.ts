import { Component, OnInit } from '@angular/core';
import { PersonsDataService } from '../persons-data.service';

@Component({
  selector: 'app-personen',
  templateUrl: './personen.component.html',
  styleUrls: ['./personen.component.css']
})
export class PersonenComponent implements OnInit {

  // The structure of our object
  persons = [{    
    name: "",
    firstName: "",
    birthdate: "",
    joinDate: "",
    bankNum: 0,
    sellary: 0,
    street: "",
    plz: 0, 
    city: "",
    email: ""
  }];

  // These are the boolians for the visibility of the divs
  menuVisible = true;
  personsListVisible = false;
  commingSoonVisible = false;

  // The constructor to define the Dependency Injection
   // In the constructor we assign the data service and copy the array to our array to make it possible to show it in the code
  constructor(private persondata: PersonsDataService) { 
      this.persons = persondata.getPersons();
  }

  ngOnInit(): void {
  }

}
