import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spesen',
  templateUrl: './spesen.component.html',
  styleUrls: ['./spesen.component.css']
})
export class SpesenComponent implements OnInit {

  menuVisible = true;
  commingSoonVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

}
