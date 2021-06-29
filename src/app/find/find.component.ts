import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../common/filters.service';
import { Profil } from '../common/profil';
import { UserFilters } from '../common/user-filters';
import { UsersService } from '../common/users.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent implements OnInit {
  public listOfUser: Profil[] = [];
  public usersToShow: Profil[] = [];
  public listOfMatch: Profil[] = [];
  public listOfNext: Profil[] = [];
  userFilters: UserFilters;
  constructor(
    private usersService: UsersService,
    private filtersService: FiltersService
  ) {}

  ngOnInit(): void {
    this.userFilters = this.filtersService.userFilters;
    console.log(this.usersToShow);
    this.usersService.getUsers().subscribe((data) => {
      this.listOfUser = data;
      if (this.userFilters.minRating) {
        this.listOfUser.forEach((user) => {
          if (
            user.rate >= this.userFilters.minRating &&
            user.job == this.userFilters.category &&
            user.softSkills.includes(
              this.userFilters.softSkills[0] ||
                this.userFilters.softSkills[1] ||
                this.userFilters.softSkills[2]
            )
          ) {
            this.usersToShow.push(user);
          }
        });
      }
    });
  }

  buttonMatch() {
    this.listOfMatch.push(this.usersToShow[0]);
    this.usersToShow.shift();
    console.log(this.listOfMatch);
    if (this.usersToShow.length == 0) {
      this.showNothing();
    }
  }

  buttonNext() {
    this.listOfNext.push(this.listOfUser[0]);
    this.usersToShow.shift();
    console.log(this.listOfNext);
    if (this.usersToShow.length == 0) {
      this.showNothing();
    }
  }
  showNothing() {
    alert('Plus aucun freelancer');
  }
}
