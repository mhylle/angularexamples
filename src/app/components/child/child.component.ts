import {Component, Input, OnInit} from '@angular/core';
import {ChildModel} from '../model/ChildModel';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childModel: ChildModel;
  constructor() { }

  ngOnInit() {
  }

}
