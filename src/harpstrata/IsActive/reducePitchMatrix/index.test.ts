import { PitchIds, C, D, E, F, G, A, B } from '../../Pitch'
import type { PitchMatrix, PitchRow } from '../../Pitch'
import { DegreeIds, ROOT, SECOND, THIRD, FOURTH, FIFTH, SIXTH, SEVENTH } from '../../Degree'
import type { DegreeMatrix, DegreeRow } from '../../Degree'

import type { MatrixAccumulator, RowAccumulator } from './index'
import { reducePitchesMatrixToActives, reducePitchesRowToActives, reduceDegreeRowToActives, reduceDegreeMatrixToActives } from './index'

test('reducePitchesRowToActives will take a list of active PitchIds and create an array of equivalent DegreeIds given an paired Pitch and Degree row', () => {
  const degreeRow: DegreeRow = [ ROOT , SECOND, THIRD, FOURTH ]
  const pitchRow: PitchRow = [ C, D, E, F ]
  const activePitchIds = [ PitchIds.D, PitchIds.F ]
  const expectedDegreeIds: DegreeIds[] = [ DegreeIds.Second, DegreeIds.Fourth ]

  const initialState: RowAccumulator = { pitchRow, degreeRow, activePitchIds, activeDegreeIds: [] }

  const { activeDegreeIds } = pitchRow.reduce(reducePitchesRowToActives, initialState)

  expect(activeDegreeIds).toStrictEqual(expectedDegreeIds)
})

test('reducePitchesMatrixToActives will take a list of active PitchIds and create an array of equivalent DegreeIds given a paired Pitch and Degree matrix', () => {
  const degreeMatrix: DegreeMatrix = [
    [ ROOT , SECOND, THIRD, FOURTH ],
    [ FIFTH, SIXTH, SEVENTH, ROOT  ],
  ]
  const pitchMatrix: PitchMatrix = [
    [ C, D, E, F ],
    [ G, A, B, C ],
  ]
  const activePitchIds = [ PitchIds.D, PitchIds.F, PitchIds.G ]
  const expectedDegreeIds: DegreeIds[] = [ DegreeIds.Second, DegreeIds.Fourth, DegreeIds.Fifth ]

  const initialState: MatrixAccumulator = { pitchMatrix, degreeMatrix, activePitchIds, activeDegreeIds: [] }

  const { activeDegreeIds } = pitchMatrix.reduce(reducePitchesMatrixToActives, initialState)

  expect(activeDegreeIds).toStrictEqual(expectedDegreeIds)
})

test('reduceDegreeRowToActives will take a list of active DegreeIds and create an array of equivalent PitchIds given an paired Pitch and Degree row', () => {
  const degreeRow: DegreeRow = [ ROOT , SECOND, THIRD, FOURTH ]
  const pitchRow: PitchRow = [ C, D, E, F ]
  const activeDegreeIds: DegreeIds[] = [ DegreeIds.Second, DegreeIds.Fourth ]
  const expectedPitchIds = [ PitchIds.D, PitchIds.F ]

  const initialState: RowAccumulator = { degreeRow, pitchRow, activePitchIds: [], activeDegreeIds }

  const { activePitchIds } = degreeRow.reduce(reduceDegreeRowToActives, initialState)

  expect(activePitchIds).toStrictEqual(expectedPitchIds)
})

test('reducePitchMatrix will take a list of active DegreeIds and create an array of equivalent PitchIds given an paired Pitch and Degree row', () => {
  const degreeMatrix: DegreeMatrix = [
    [ ROOT , SECOND, THIRD, FOURTH ],
    [ FIFTH, SIXTH, SEVENTH, ROOT  ],
  ]
  const pitchMatrix: PitchMatrix = [
    [ C, D, E, F ],
    [ G, A, B, C ],
  ]
  const expectedPitchIds = [ PitchIds.D, PitchIds.F, PitchIds.G ]
  const activeDegreeIds: DegreeIds[] = [ DegreeIds.Second, DegreeIds.Fourth, DegreeIds.Fifth ]

  const initialState: MatrixAccumulator = { degreeMatrix, pitchMatrix, activePitchIds: [], activeDegreeIds }

  const { activePitchIds } = degreeMatrix.reduce(reduceDegreeMatrixToActives, initialState)

  expect(activePitchIds).toStrictEqual(expectedPitchIds)
})
