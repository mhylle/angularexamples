import {QueueModel} from './Queue.model';
import {Observable} from 'rxjs';

export interface ServerModel {
  url: string;
  queueModels?: Observable<QueueModel[]>;
}
