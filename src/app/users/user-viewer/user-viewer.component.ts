import {Component, OnInit} from '@angular/core';
import {SimpleBackendService} from '../../services/simple-backend.service';
import {User} from '../../model/user';
import {interval} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-user-viewer',
  templateUrl: './user-viewer.component.html',
  styleUrls: ['./user-viewer.component.css']
})
export class UserViewerComponent implements OnInit {

  users: User[];

  constructor(private simpleBackendService: SimpleBackendService) {
  }

  ngOnInit() {
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.simpleBackendService.users)
      )
      .subscribe(res => this.users = res);
  }

}
