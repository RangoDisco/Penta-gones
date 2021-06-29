import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    const obs = this.http.get('assets/json/categories.json');
    const result = (data: any) => {
      return data as JSON;
    };
    return obs.pipe(map(result));
  }

  getSoftSkills(): Observable<any> {
    const obs = this.http.get('assets/json/soft-skills.json');
    const result = (data: any) => {
      return data as JSON;
    };
    return obs.pipe(map(result));
  }

  softSkillsList: Object[] = [
    { item_id: 1, item_text: 'Creativity' },
    { item_id: 2, item_text: 'Communication' },
    { item_id: 3, item_text: 'Collaboration' },
    { item_id: 4, item_text: 'Time management' },
    { item_id: 5, item_text: 'Adaptability' },
    { item_id: 6, item_text: 'Leadership' },
    { item_id: 7, item_text: 'Creativity' },
    { item_id: 8, item_text: 'Creativity' },
    { item_id: 9, item_text: 'Creativity' },
    { item_id: 10, item_text: 'Creativity' },
  ];
}
