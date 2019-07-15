import {Injectable} from '@angular/core';
import {Issue} from '../model/Issue';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private readonly userIssues: Issue[];

  constructor() {
    this.userIssues = [];
    for (let i = 0; i < 10; i++) {
      const issue = {name: `Name${i}`, description: 'Lorem Ipsum'};
      this.userIssues.push(issue);
    }
  }

  get issues(): Observable<Issue[]> {
    return of(this.userIssues);
  }
}
