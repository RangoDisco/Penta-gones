import { Component, OnInit } from '@angular/core';
import { Freelance } from 'src/app/shared/freelance.model';

@Component({
  selector: 'app-freelance-profile',
  templateUrl: './freelance-profile.component.html',
  styleUrls: ['./freelance-profile.component.scss'],
})
export class FreelanceProfileComponent implements OnInit {
  freelances: Freelance[] = [
    {
      id: 1,
      picture: 'src/assets/mauranne.jpeg',
      firstname: 'Mauranne',
      lastname: 'Lagneau',
      profession: 'Web Developer',
      note: 4,
      description: 'Hello, I am a junior developer',
      f_amount: 15,
      category: ['IT', 'Photo'],
      softskills: ['Curious', 'Pro-active', 'Smiling'],
    },
  ];
  constructor() {}

  ngOnInit(): void {
  }
}
