import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../project-data.service';

@Component({
  selector: 'app-projekte',
  templateUrl: './projekte.component.html',
  styleUrls: ['./projekte.component.css']
})
export class ProjekteComponent implements OnInit {

  // The structure of our object
  projects = [{    
    projectName: "",
    duration: 0, 
    Value: 0, 
    submissionDate: ""
  }];

  // These are the boolians for the visibility of the divs
  menuVisible = true;
  projectsListVisible = false;

  // The constructor to define the Dependency Injection
  // In the constructor we assign the data service and copy the array to our array to make it possible to show it in the code
  constructor(private projectData: ProjectDataService) { 
    this.projects = projectData.getProjects();
  }

  ngOnInit(): void {
  }

}
