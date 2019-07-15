import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularexamples';

  values: [number, number];
  public data: [number, number];

  displayValues($event: [number, number]) {
    this.values = $event;
  }

  showData($event: [number, number]) {
    this.data = $event;
  }
}
