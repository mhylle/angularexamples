import {ChildModel} from './ChildModel';
import {InnerChildModel} from './InnerChildModel';

export interface MainModel {
  name: string;
  children: ChildModel[];
  innerChildren: InnerChildModel[];
}
