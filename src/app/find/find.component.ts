import { Component, OnInit } from '@angular/core';
import { Profil } from '../common/profil';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  public listOfUser:Profil[] = [];
  public listOfMatch:Profil[]=[];
  public listOfNext:Profil[]=[];

  constructor() { }

  ngOnInit(): void {
    this.afficher()
  }
  
  public user: Profil = new Profil("","Fabien","Web Dev","Web Dev @WildCodeSchoolLyon #Hackathon",0,"");
  
  public user2:Profil = new Profil("", "neibaF", "Web Dev", "Web Dev @WildCodeSchool #Hackathon", 0, "");

  afficher(){
    this.listOfUser.push(this.user);
    this.listOfUser.push(this.user2);
  }

  buttonMatch(){
    this.listOfMatch.push(this.listOfUser[0]);
    this.listOfUser.shift();
    console.log(this.listOfMatch);
  }

  buttonNext(){
    this.listOfNext.push(this.listOfUser[0]);
    this.listOfUser.shift();
  }

}

