import {Component, OnInit} from '@angular/core';
import {MockHealthIssueService} from '../../services/mock-health-issue.service';
import {Healthissue} from '../../model/Healthissue';

@Component({
  selector: 'app-healthissue-overview',
  templateUrl: './healthissue-overview.component.html',
  styleUrls: ['./healthissue-overview.component.css']
})
export class HealthissueOverviewComponent implements OnInit {
  healthIssues: Healthissue[];
  private eocVisible: boolean = true;

  constructor(protected healthIssueService: MockHealthIssueService) {
  }

  ngOnInit() {
    this.healthIssues = this.healthIssueService.healthIssues;
  }

  toggleEoc() {
    this.eocVisible = !this.eocVisible;
  }
}
