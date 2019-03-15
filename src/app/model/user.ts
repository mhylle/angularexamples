import {Deserializable} from './deserializable';

export class User implements Deserializable {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
