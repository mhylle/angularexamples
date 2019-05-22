import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  @Output()
  valueChanged: EventEmitter<[number, number]> = new EventEmitter<any>();

  @Input()
  lockSliders = false;

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

  onChange(value: [number, number]) {
    this.valueChanged.emit(value);
  }


  decreaseMin() {
    if (this.sliderRange[0] > 0) {
      if (this.lockSliders) {
        this.sliderRange = [this.sliderRange[0] - 1, this.sliderRange[1] - 1];
      } else {
        this.sliderRange = [this.sliderRange[0] - 1, this.sliderRange[1]];
      }
    }
  }

  increaseMax() {
    if (this.sliderRange[1] < 100) {
      if (this.lockSliders) {
        this.sliderRange = [this.sliderRange[0] + 1, this.sliderRange[1] + 1];
      } else {
        this.sliderRange = [this.sliderRange[0], this.sliderRange[1] + 1];
      }
    }
  }

  wheelEvent(event: WheelEvent) {
    if (event.shiftKey) {
      const tmpLock = this.lockSliders;
      this.lockSliders = true;
      if (event.deltaY > 0) {
        this.decreaseMin();
      }
      if (event.deltaY < 0) {
        this.increaseMax();
      }
      this.lockSliders = tmpLock;
    }
  }
}
