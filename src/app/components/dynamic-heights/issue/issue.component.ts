import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Issue} from '../../model/Issue';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  @Input()
  issue: Issue;
  private dataRefresher: number;

  constructor() {
  }

  ngOnInit() {
    this.dataRefresher =
      setInterval(() => {
console.log('1');
      }, 1000);
    const numbers = interval(1000);
    const takeFourNumbers = numbers.pipe(take(400));

  }

}
