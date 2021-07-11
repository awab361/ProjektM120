import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  // Da sind alle Datensätze aufgelistet, wir haben es da Codiert im code da wir keinen Backend haben
  projects = [{    
    projectName: "New Website",
    duration: 133, 
    Value: 15000, 
    submissionDate: "12.03.2022"
  },
  {
    projectName: "Build a new office",
    duration: 50, 
    Value: 10000, 
    submissionDate: "12.09.2021"
  },
  {
    projectName: "update the db",
    duration: 60, 
    Value: 500, 
    submissionDate: "14.02.2024"
  },
  {
    projectName: "new phone app",
    duration: 150, 
    Value: 25000, 
    submissionDate: "16.12.2023"
  },
];

  constructor() { }
  // Alle Projekte werden mit dieser Funktion exportiert
  getProjects(){
    return this.projects;
  }
}
