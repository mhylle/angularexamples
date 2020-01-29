import { Component, OnInit } from '@angular/core';
import {ServerService} from './serv ices/server.service';
import {Observable} from 'rxjs';
import {ServerModel} from './model/Server.model';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {
  private servers$: Observable<ServerModel[]>;

  constructor(private readonly serverService: ServerService) { }

  ngOnInit() {
    this.servers$ = this.serverService.servers;
  }

}
