import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  myArray = ['SDE','Gururaj','9999900000']
  constructor() { }

  ngOnInit(): void {
  }

}
