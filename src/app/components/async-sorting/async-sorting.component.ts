import {Component, OnInit} from '@angular/core';
import {IssueService} from '../services/issue.service';
import {Observable} from 'rxjs';
import {Issue} from '../model/Issue';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-async-sorting',
  templateUrl: './async-sorting.component.html',
  styleUrls: ['./async-sorting.component.css']
})
export class AsyncSortingComponent implements OnInit {
  public issues$: Observable<Issue[]>;

  private sortColumn = 'name';
  private sortOrder = 'asc';

  constructor(private issueService: IssueService) {
  }

  ngOnInit() {
    this.issues$ = this.issueService.issues;
  }

  sort(column: string) {
    console.log('sort');
    switch (column) {
      case 'name':
        console.log('name');
        if (this.sortColumn === 'name') {
          console.log('name name');
          if (this.sortOrder === 'asc') {
            console.log('name name asc -> desc');
            this.sortOrder = 'desc';
          } else {
            console.log('name name desc -> asc');
            this.sortOrder = 'asc';
          }
        }
        this.sortColumn = 'name';
        break;
      case 'description':
        if (this.sortColumn === 'description') {
          if (this.sortOrder === 'asc') {
            this.sortOrder = 'desc';
          } else {
            this.sortOrder = 'asc';
          }
        }
        this.sortColumn = 'description';
        break;
      default:
        this.sortColumn = 'name';
    }
    this.issues$.pipe(
      tap(issues => {
        return issues.sort((i1, i2) => {
            if (this.sortColumn === 'name') {
              if (this.sortOrder === 'asc') {
                console.log('sort name asc');
                return i1.name.localeCompare(i2.name);
              } else {
                console.log('sort name desc');
                return i2.name.localeCompare(i1.name);
              }
            }

            if (this.sortColumn === 'description') {
              if (this.sortOrder === 'asc') {
                console.log('sort desc asc');
                return i1.description.localeCompare(i2.description);
              } else {
                console.log('sortdesc desc');
                return i2.description.localeCompare(i1.description);
              }
            }
            return i1.name.localeCompare(i2.name);
          }
        );
      })
    );
  }
}
