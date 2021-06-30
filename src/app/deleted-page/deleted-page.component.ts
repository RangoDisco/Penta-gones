import { Component, OnInit } from '@angular/core';
import { ContactedService } from '../common/contacted.service';
import { Profil } from '../common/profil';

@Component({
  selector: 'app-deleted-page',
  templateUrl: './deleted-page.component.html',
  styleUrls: ['./deleted-page.component.scss'],
})
export class DeletedPageComponent implements OnInit {
  constructor(private contactedService: ContactedService) {}

  deleted: Profil[] = [];
  ngOnInit(): void {
    this.deleted = this.contactedService.deleted;
  }
}
