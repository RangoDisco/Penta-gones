import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FiltersService } from '../common/filters.service';
import { UserFilters } from '../common/user-filters';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent implements OnInit {
  public dropdownList: any[] = [];
  public selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  public categories: any[] = [];
  public softSkillsList: any[] = [];
  public userFilters: UserFilters = new UserFilters('', [], '');
  public star: string = 'assets/logo/star.svg';

  constructor(private filtersService: FiltersService, private router: Router) {}

  ngOnInit(): void {
    // Replissage du tableau de categorie via le service
    this.filtersService.getCategories().subscribe((data) => {
      this.categories = data;
    });

    // Remplissage du tableau de soft skills via le service
    this.filtersService.getSoftSkills().subscribe((data) => {
      this.softSkillsList = data;
    });
    this.dropdownList = [
      { item_id: 1, item_text: 'Creativity' },
      { item_id: 2, item_text: 'Communication' },
      { item_id: 3, item_text: 'Collaboration' },
      { item_id: 4, item_text: 'Time management' },
      { item_id: 5, item_text: 'Adaptability' },
      { item_id: 6, item_text: 'Leadership' },
    ];
    this.selectedItems = [];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      itemsShowLimit: 3,
      allowSearchFilter: true,
      limitSelection: 3,
    };
  }
  onItemSelect(item: any) {
    this.userFilters.softSkills.push(item.item_text);
  }

  getFilters() {
    if (
      this.userFilters.softSkills.length <= 3 &&
      this.userFilters.softSkills.length > 0 &&
      this.userFilters.category !== '' &&
      this.userFilters.minRating !== ''
    ) {
      this.router.navigate(['/find']);
      this.filtersService.addFilters(this.userFilters);
    } else alert('Please use every selects');
  }
}
