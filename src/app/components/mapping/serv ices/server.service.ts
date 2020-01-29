import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable, of} from 'rxjs';
import {ServerModel} from '../model/Server.model';
import {QueueService} from './queue.service';
import {mergeMap, toArray} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private readonly http: HttpClient, private readonly queueService: QueueService) {
  }

  get servers(): Observable<ServerModel[]> {
    const serverObservable = this.http.get<ServerModel[]>(`${environment.baseUrl}/servers`);
    return serverObservable.pipe(
      mergeMap(servers => servers),
      mergeMap(server => {
        server.queueModels = this.queueService.quques;
        return of(server);
      }), toArray()
    );
  }
}
