import {Injectable} from '@angular/core';
import {MainModel} from '../model/MainModel';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  repository: MainModel[];

  constructor() {
    this.repository = [];
  }

  get mainModel(): Observable<MainModel[]> {
    return of(this.repository);
  }

  createMainModel(mainModel: MainModel): Observable<MainModel> {
    this.repository.push(mainModel);
    return of(mainModel);
  }

  deleteMainModel(mainModel: MainModel): Observable<{ success: boolean }> {
    this.repository = this.repository.filter(mdl => mdl.name !== mainModel.name);
    return of({success: true});
  }
}
