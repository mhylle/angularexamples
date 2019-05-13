import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-health-issue-slider',
  templateUrl: './health-issue-slider.component.html',
  styleUrls: ['./health-issue-slider.component.css']
})
export class HealthIssueSliderComponent implements OnInit {

  sliderRange = [40, 60];

  rangeConfig: any = {
    behaviour: 'drag',
    connect: true,
    margin: 1,
    limit: 100,
    range: {
      min: 0,
      max: 100
    },
    pips: {
      mode: 'drag',
      density: 0.1
    }
  };

  private form1: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.form1 = this.formBuilder.group({'single': [10]});
  }

}
