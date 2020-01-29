import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {QueueModel} from '../model/Queue.model';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(private readonly http: HttpClient) {
  }

  get quques(): Observable<QueueModel[]> {
    return this.http.get<QueueModel[]>(`${environment.baseUrl}/queues`);
  }
}
