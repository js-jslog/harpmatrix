import type { IsActiveProps } from '../../types'
import { PitchIds, C, D, E, F } from '../../../Pitch'
import { DegreeIds, ROOT, SECOND, THIRD, FOURTH } from '../../../Degree'

import { getCounterpartDegreeIds, getCounterpartPitchIds } from './index'

const degreeMatrix = [
  [ ROOT , SECOND ],
  [ THIRD, FOURTH ],
]
const pitchMatrix = [
  [ C, D ],
  [ E, F ],
]
const baseIsActiveProps: IsActiveProps = {
  degreeMatrix, pitchMatrix, activeIds: []
}

test('getCounterpartDegreeIds returns the DegreeIds[] for a given PitchIds[]', () => {
  const isActiveProps = { ...baseIsActiveProps, activeIds: [ PitchIds.D, PitchIds.E ] }
  const expectedCounterpartIds = [ DegreeIds.Second, DegreeIds.Third ]
  const actualCounterpartIds = getCounterpartDegreeIds(isActiveProps)

  expect(actualCounterpartIds).toStrictEqual(expectedCounterpartIds)
})

test('getCounterpartPitchIds returns the PitchIds[] for a given DegreeIds[]', () => {
  const isActiveProps = { ...baseIsActiveProps, activeIds: [ DegreeIds.Second, DegreeIds.Third ] }
  const expectedCounterpartIds = [ PitchIds.D, PitchIds.E ]
  const actualCounterpartIds = getCounterpartPitchIds(isActiveProps)

  expect(actualCounterpartIds).toStrictEqual(expectedCounterpartIds)
})