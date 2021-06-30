import { Component, OnInit } from '@angular/core';
import { ContactedService } from '../common/contacted.service';
import { Profil } from '../common/profil';

@Component({
  selector: 'app-contacted',
  templateUrl: './contacted.component.html',
  styleUrls: ['./contacted.component.scss'],
})
export class ContactedComponent implements OnInit {
  constructor(private contactedService: ContactedService) {}

  contacted: Profil[] = [];
  ngOnInit(): void {
    this.contacted = this.contactedService.contacted;
  }

  addContactedToDeleted(contacted: Profil) {
    this.contactedService.addContactedToDeleted(contacted);
  }

  addContactedToArchived(contacted: Profil) {
    this.contactedService.addContactedToArchived(contacted);
  }
}
