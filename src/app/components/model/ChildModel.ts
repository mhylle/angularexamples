import {InnerChildModel} from './InnerChildModel';

export interface ChildModel {
  name: string;
  children: InnerChildModel[];
}
