import {Component, Input, OnInit} from '@angular/core';
import {Issue} from '../../model/Issue';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  @Input()
  issue: Issue;

  constructor() {
  }

  ngOnInit() {
  }

}
