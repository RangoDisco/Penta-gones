import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    const obs = this.http.get('assets/json/users.json');
    const result = (data: any) => {
      return data as JSON;
    };
    return obs.pipe(map(result));
  }
}
