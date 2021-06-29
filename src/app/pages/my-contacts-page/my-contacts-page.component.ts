import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/common/profil';

@Component({
  selector: 'app-my-contacts-page',
  templateUrl: './my-contacts-page.component.html',
  styleUrls: ['./my-contacts-page.component.scss'],
})
export class MyContactsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  contactedFreelances: Profil[] = [
    {
      photo: '../../../assets/contacted1.jpg',
      username: 'Lilia',
      job: 'Photograph',
      description: 'I love to take pictures',
      rate: 4,
      backgroundImage: '',
    },
    {
      photo: '../../../assets/contacted2.jpg',
      username: 'Caroline',
      job: 'Designer',
      description:
        "Passionate about design, I'll help you to realise your projects",
      rate: 5,
      backgroundImage: '',
    },
    {
      photo: '../../../assets/contacted3.jpg',
      username: 'Matthias',
      job: 'Web developer',
      description: 'I will develop your website with efficiency',
      rate: 3,
      backgroundImage: '',
    },
  ];
}
