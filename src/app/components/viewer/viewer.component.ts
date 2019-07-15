import {Component, OnInit} from '@angular/core';
import {MainService} from '../services/main.service';
import {MainModel} from '../model/MainModel';
import {Observable} from 'rxjs';
import {ChildModel} from '../model/ChildModel';
import {ChildService} from '../services/child.service';
import {InnerChildService} from '../services/inner-child.service';
import {InnerChildModel} from '../model/InnerChildModel';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  mainModels$: Observable<MainModel[]>;

  constructor(private mainService: MainService, private childService: ChildService, private innerChildService: InnerChildService) {
    this.createMockModel();
  }

  ngOnInit() {
    this.mainModels$ = this.mainService.mainModel;
  }

  private createMockModel() {
    const mainModel01: MainModel = {
      name: 'Model01',
      children: [],
      innerChildren: []
    };

    const mainModel02: MainModel = {
      name: 'Model02',
      children: [],
      innerChildren: []
    };

    const mainModel03: MainModel = {
      name: 'Model03',
      children: [],
      innerChildren: []
    };

    const {childModel01, childModel02, childModel03, childModel04, childModel05, childModel06} = this.createChildModels();
    const {
      innerChildModel01,
      innerChildModel02,
      innerChildModel03,
      innerChildModel04,
      innerChildModel05,
      innerChildModel06,
      innerChildModel07,
      innerChildModel08
    } = this.createInnerChildModels();
    this.childService.createChildModel(childModel01);
    this.childService.createChildModel(childModel02);
    this.childService.createChildModel(childModel03);
    this.childService.createChildModel(childModel04);
    this.childService.createChildModel(childModel05);
    this.childService.createChildModel(childModel06);

    this.innerChildService.createInnerChildModel(innerChildModel01);
    this.innerChildService.createInnerChildModel(innerChildModel02);
    this.innerChildService.createInnerChildModel(innerChildModel03);
    this.innerChildService.createInnerChildModel(innerChildModel04);
    this.innerChildService.createInnerChildModel(innerChildModel05);
    this.innerChildService.createInnerChildModel(innerChildModel06);
    this.innerChildService.createInnerChildModel(innerChildModel07);
    this.innerChildService.createInnerChildModel(innerChildModel08);

    mainModel01.children.push(childModel01);
    mainModel01.children.push(childModel02);
    mainModel01.innerChildren.push(innerChildModel01);
    mainModel02.children.push(childModel03);
    mainModel02.innerChildren.push(innerChildModel02);
    mainModel02.innerChildren.push(innerChildModel03);
    mainModel03.children.push(childModel04);
    mainModel03.children.push(childModel05);
    mainModel03.children.push(childModel06);

    childModel01.children.push(innerChildModel04);
    childModel01.children.push(innerChildModel05);
    childModel03.children.push(innerChildModel06);
    childModel05.children.push(innerChildModel07);
    childModel06.children.push(innerChildModel08);
    this.mainService.createMainModel(mainModel01);
    this.mainService.createMainModel(mainModel02);
    this.mainService.createMainModel(mainModel03);
  }

  private createChildModels() {
    const childModel01: ChildModel = {
      name: 'Child Model01',
      children: [],
    };


    const childModel02: ChildModel = {
      name: 'Child Model02',
      children: [],
    };


    const childModel03: ChildModel = {
      name: 'Child Model03',
      children: [],
    };

    const childModel04: ChildModel = {
      name: 'Child Model04',
      children: [],
    };

    const childModel05: ChildModel = {
      name: 'Child Model05',
      children: [],
    };
    const childModel06: ChildModel = {
      name: 'Child Model06',
      children: [],
    };
    return {childModel01, childModel02, childModel03, childModel04, childModel05, childModel06};
  }

  private createInnerChildModels() {
    const innerChildModel01: InnerChildModel = {
      name: 'Inner Child Model01',
    };
    const innerChildModel02: InnerChildModel = {
      name: 'Inner Child Model02',
    };
    const innerChildModel03: InnerChildModel = {
      name: 'Inner Child Model03',
    };
    const innerChildModel04: InnerChildModel = {
      name: 'Inner Child Model04',
    };
    const innerChildModel05: InnerChildModel = {
      name: 'Inner Child Model05',
    };
    const innerChildModel06: InnerChildModel = {
      name: 'Inner Child Model06',
    };
    const innerChildModel07: InnerChildModel = {
      name: 'Inner Child Model07',
    };
    const innerChildModel08: InnerChildModel = {
      name: 'Inner Child Model08',
    };


    return {
      innerChildModel01,
      innerChildModel02,
      innerChildModel03,
      innerChildModel04,
      innerChildModel05,
      innerChildModel06,
      innerChildModel07,
      innerChildModel08
    };
  }
}
