import { Attribute } from './attribute';

export interface Player {
  name: string;
  startTime: Date;
  attributes: Attribute[];
}
