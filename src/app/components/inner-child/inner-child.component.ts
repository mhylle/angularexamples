import {Component, Input, OnInit} from '@angular/core';
import {InnerChildModel} from '../model/InnerChildModel';

@Component({
  selector: 'app-inner-child',
  templateUrl: './inner-child.component.html',
  styleUrls: ['./inner-child.component.css']
})
export class InnerChildComponent implements OnInit {
  @Input()
  innerChildModel: InnerChildModel;
  constructor() { }

  ngOnInit() {
  }

}
