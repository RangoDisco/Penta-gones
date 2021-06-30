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
      username: 'Lilia',
      job: 'Photograph',
      softSkills: ['Creativity', 'Communication', 'Collaboration'],
      rate: '4',
      backgroundImage: '../../../assets/img/contacted1.jpg',
    },
    {
      username: 'Caroline',
      job: 'Designer',
      softSkills: ['Creativity', 'Communication', 'Collaboration'],

      rate: '5',
      backgroundImage: '../../../assets/img/contacted2.jpg',
    },
    {
      username: 'Matthias',
      job: 'Web developer',
      softSkills: ['Creativity', 'Communication', 'Collaboration'],
      rate: '3',
      backgroundImage: '../../../assets/img/contacted3.jpg',
    },
  ];

  addContactedToArchived(contacted: Profil) {
    this.contacted.splice(this.contacted.indexOf(contacted), 1);
    this.archived.push(contacted);
  }

  addContactedToDeleted(contacted: Profil) {
    this.contacted.splice(this.contacted.indexOf(contacted), 1);
    this.deleted.push(contacted);
  }
}
