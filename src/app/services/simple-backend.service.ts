import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SimpleBackendService {

  constructor(private http: HttpClient) {
  }

  get users(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
}
