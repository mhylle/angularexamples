import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-health-issue-slider',
  templateUrl: './health-issue-slider.component.html',
  styleUrls: ['./health-issue-slider.component.css']
})
export class HealthIssueSliderComponent implements OnInit {
  sliderRange: number[];
  rangeConfig: any = {};

  @Input()
  verticalSliders: boolean;

  constructor() {
    this.sliderRange = [40, 60];
    this.rangeConfig = {
      behaviour: 'drag',
      connect: true,
      margin: 5,
      limit: 100,
      range: {
        min: 0,
        max: 100
      }
    };
  }

  ngOnInit() {

  }

  onChange(value: any) {
    console.log('Value changed to', value);
  }


}
