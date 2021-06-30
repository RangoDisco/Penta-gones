import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  public portraitImg: string = "assets/img/Fiverr_14_Gabriell1e_Background.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
