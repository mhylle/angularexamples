import {Component, Input, OnInit} from '@angular/core';
import {MainModel} from '../model/MainModel';
import {Observable} from 'rxjs';
import {map, switchMap, toArray} from 'rxjs/operators';

interface MainModelUI {
  mainModel: MainModel;
  showContent: boolean;
  showChildren: boolean;
  showInnerChildren: boolean;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input()
  mainModel$: Observable<MainModel[]>;
  public mainModelUI$: Observable<MainModelUI[]>;


  constructor() {
  }

  ngOnInit() {
    this.mainModelUI$ = this.mainModel$.pipe(
      switchMap(mainModels => mainModels),
      map(mainModel => {
        const mainModelUI: MainModelUI = {
          mainModel: mainModel,
          showContent: true,
          showChildren: true,
          showInnerChildren: true
        };
        return mainModelUI;
      }),
      toArray()
    );
  }

  toggleContent(mainModelUI: MainModelUI) {
    mainModelUI.showContent= !mainModelUI.showContent;
  }
  toggleChildren(mainModelUI: MainModelUI) {
    mainModelUI.showChildren = !mainModelUI.showChildren;
  }

  toggleInnerChildren(mainModelUI: MainModelUI) {
    mainModelUI.showInnerChildren = !mainModelUI.showInnerChildren;
  }
}
