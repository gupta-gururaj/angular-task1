import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {

  title = 'Section one component'
  constructor() { }

  saveClickHandler(value:string){
    console.log("Value - "+value)
  }

  ngOnInit(): void {
  }

}
