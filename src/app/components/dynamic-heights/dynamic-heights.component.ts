import {Component, OnInit} from '@angular/core';
import {Issue} from '../model/Issue';
import {Observable} from 'rxjs';
import {IssueService} from '../services/issue.service';

@Component({
  selector: 'app-dynamic-heights',
  templateUrl: './dynamic-heights.component.html',
  styleUrls: ['./dynamic-heights.component.css']
})
export class DynamicHeightsComponent implements OnInit {

  issues$: Observable<Issue[]>;

  constructor(private issueService: IssueService) {
  }

  ngOnInit() {
    this.issues$ = this.issueService.issues;
  }

}
