import {EpisodeOfCare} from './EpisodeOfCare';

export interface Healthissue {
  name: string;
  start: number;
  episodeOfCare: EpisodeOfCare[];
}
