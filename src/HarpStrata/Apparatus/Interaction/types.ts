export enum InteractionIds {
  Blow = 'BLOW',
  Draw = 'DRAW',
  Bend1 = 'BEND1',
  Bend2 = 'BEND2',
  Bend3 = 'BEND3',
  Overblow1 = 'OVERBLOW1',
}

export interface Interaction {
  id: InteractionIds;
}

type InteractionRow = Array<Interaction>
export type InteractionMatrix = Array<InteractionRow>
