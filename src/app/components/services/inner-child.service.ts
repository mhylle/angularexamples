import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {InnerChildModel} from '../model/InnerChildModel';

@Injectable({
  providedIn: 'root'
})
export class InnerChildService {
  repository: InnerChildModel[];

  constructor() {
    this.repository = [];
  }

  get innerChildModel(): Observable<InnerChildModel[]> {
    return of(this.repository);
  }

  createInnerChildModel(innerChildModel: InnerChildModel): Observable<InnerChildModel> {
    this.repository.push(innerChildModel);
    return of(innerChildModel);
  }

  deleteInnerChildModel(innerChildModel: InnerChildModel): Observable<{ success: boolean }> {
    this.repository = this.repository.filter(mdl => mdl.name !== innerChildModel.name);
    return of({success: true});
  }
}
