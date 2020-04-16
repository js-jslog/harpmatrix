import { DegreeMatrix } from './Degree/types'
import { Apparatus } from './Apparatus/types'

export interface HarpStrata {
  readonly apparatus: Apparatus;
  readonly degreeMatrix: DegreeMatrix;
}

export {
  ApparatusIds,
  Apparatus,
  InteractionIds,
  Interaction,
  InteractionRow,
  InteractionMatrix,
  HalfstepIndex,
  HalfstepIndexRow,
  HalfstepIndexMatrix,
} from './Apparatus/types'
export {
  DegreeIds,
  Degree,
  DegreeRow,
  DegreeMatrix
} from './Degree/types'
export {
  PozitionIds,
  Pozition
} from './Pozition/types'
