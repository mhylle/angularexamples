import {Injectable} from '@angular/core';
import {Healthissue} from '../model/Healthissue';
import {EpisodeOfCare} from '../model/EpisodeOfCare';

@Injectable({
  providedIn: 'root'
})
export class MockHealthIssueService {
  his: Healthissue[];

  constructor() {
    const eoc1: EpisodeOfCare = {
      name: 'Ortopædkirurgisk overaft. E - AUH',
      start: 0,
      end: 12
    };

    const eoc2: EpisodeOfCare = {
      name: 'Ortopædkirurgisk overaft. HEV',
      start: 8,
      end: 36
    };
    const hi1: Healthissue = {
      name: 'Hofte- og degenerativ sygdom, hoftedysplai',
      start: 1,
      episodeOfCare: [eoc1, eoc2]
    };

    const eoc3: EpisodeOfCare = {
      name: 'Ortopædkirurgisk overaft. E - AUH',
      start: 0,
      end: 12
    };

    const hi2: Healthissue = {
      name: 'Hofte- og degenerativ sygdom, hoftedysplai',
      start: 1,
      episodeOfCare: [eoc3]
    };

    const eoc4: EpisodeOfCare = {
      name: 'Ortopædkirurgisk overaft. E - AUH',
      start: 0,
      end: 12
    };

    const hi3: Healthissue = {
      name: 'Hofte- og degenerativ sygdom, hoftedysplai',
      start: 1,
      episodeOfCare: [eoc4]
    };


    this.his = [hi1, hi2, hi3];
    for (let i = 0; i < 15; i++) {
      this.his.push(this.createIssue());
    }
  }

  createIssue(): Healthissue {
    const eoc4: EpisodeOfCare = {
      name: 'Ortopædkirurgisk overaft. E - AUH',
      start: 0,
      end: 12
    };

    const hi3: Healthissue = {
      name: 'Hofte- og degenerativ sygdom, hoftedysplai',
      start: 1,
      episodeOfCare: [eoc4]
    };

    return hi3;
  }

  public get healthIssues(): Healthissue[] {
    return this.his;
  }
}
