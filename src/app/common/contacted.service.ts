import { Injectable } from '@angular/core';
import { Profil } from './profil';

@Injectable({
  providedIn: 'root',
})
export class ContactedService {
  constructor() {}

  deleted: Profil[] = [];
  archived: Profil[] = [];
  contacted: Profil[] = [
    {
      photo: '../../../assets/img/contacted1.jpg',
      username: 'Lilia',
      job: 'Photograph',
      description: 'I love to take pictures',
      rate: 4,
      backgroundImage: '',
    },
    {
      photo: '../../../assets/img/contacted2.jpg',
      username: 'Caroline',
      job: 'Designer',
      description:
        "Passionate about design, I'll help you to realise your projects",
      rate: 5,
      backgroundImage: '',
    },
    {
      photo: '../../../assets/img/contacted3.jpg',
      username: 'Matthias',
      job: 'Web developer',
      description: 'I will develop your website with efficiency',
      rate: 3,
      backgroundImage: '',
    },
  ];

  addContactedToArchived(contacted: Profil) {
    console.log(contacted);
    this.contacted.splice(this.contacted.indexOf(contacted), 1);
    this.archived.push(contacted);
  }

  addContactedToDeleted(contacted: Profil) {
    console.log(contacted);
    this.contacted.splice(this.contacted.indexOf(contacted), 1);
    this.archived.push(contacted);
  }
}
