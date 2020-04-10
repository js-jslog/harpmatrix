export enum Degrees {
  Root = '1',
  Flat2 = 'b2',
  Second = '2',
  Flat3 = 'b3',
  Third = '3',
  Fourth = '4',
  Flat5 = 'b5',
  Fifth = '5',
  Flat6 = 'b6',
  Sixth = '6',
  Flat7 = 'b7',
  Seventh = '7',
};

interface DegreeRow extends Array<Degrees>{}
export interface DegreeMatrix extends Array<DegreeRow>{}