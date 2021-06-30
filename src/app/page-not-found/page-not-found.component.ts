import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  public portraitImg2: string = "assets/img/Fiverr_04.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
