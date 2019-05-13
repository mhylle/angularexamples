import {Component, Input, OnInit} from '@angular/core';
import {Healthissue} from '../../../model/Healthissue';

@Component({
  selector: 'app-healthissue-details',
  templateUrl: './healthissue-details.component.html',
  styleUrls: ['./healthissue-details.component.css']
})
export class HealthissueDetailsComponent implements OnInit {

  @Input()
  hi: Healthissue;

  constructor() {
  }

  ngOnInit() {
  }

}
