import { Component, OnInit } from '@angular/core';
import { Freelance } from 'src/common/freelance';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.scss']
})
export class FormularyComponent implements OnInit {

  freelance:any= new Freelance("","","","",2,"",5);

  stars = [1,2,3,4,5];

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() { this.submitted = true; }
 
  
}

