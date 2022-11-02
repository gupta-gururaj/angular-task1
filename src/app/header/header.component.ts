import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  myArray = ['Login','Signup','More']
  img = "https://www.bacancytechnology.com/main-boot-5/images/bacancy-logo-white.svg"
  ngOnInit(): void {
  }

}
