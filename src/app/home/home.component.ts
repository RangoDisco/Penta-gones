import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public portraitImg: string = "assets/img/Fiverr_14_Gabriell1e_Background.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
