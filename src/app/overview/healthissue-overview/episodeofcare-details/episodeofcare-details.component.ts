import {Component, Input, OnInit} from '@angular/core';
import {EpisodeOfCare} from '../../../model/EpisodeOfCare';

@Component({
  selector: 'app-episodeofcare-details',
  templateUrl: './episodeofcare-details.component.html',
  styleUrls: ['./episodeofcare-details.component.css']
})
export class EpisodeofcareDetailsComponent implements OnInit {

  @Input()
  eoc: EpisodeOfCare;

  constructor() { }

  ngOnInit() {
  }

}
