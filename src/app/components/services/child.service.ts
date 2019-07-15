import {Injectable} from '@angular/core';
import {MainModel} from '../model/MainModel';
import {Observable, of} from 'rxjs';
import {ChildModel} from '../model/ChildModel';
import {MainService} from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  repository: ChildModel[];

  constructor(private mainModelService: MainService) {
    this.repository = [];
  }

  get childModel(): Observable<ChildModel[]> {
    return of(this.repository);
  }

  createChildModel(childModel: ChildModel): Observable<ChildModel> {
    this.repository.push(childModel);
    return of(childModel);
  }

  deleteChildModel(childModel: ChildModel): Observable<{ success: boolean }> {
    this.repository = this.repository.filter(mdl => mdl.name !== childModel.name);
    return of({success: true});
  }
}
