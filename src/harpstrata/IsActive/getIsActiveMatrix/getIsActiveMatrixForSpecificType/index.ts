import { IsActiveProps, IsActiveIds, IsActiveRow, IsActiveMatrix } from '../../types'
import type { Pitch, PitchRow } from '../../../Pitch'
import { PitchIds } from '../../../Pitch'
import type { Degree, DegreeRow } from '../../../Degree'
import { DegreeIds } from '../../../Degree'

export const getIsActiveMatrixForDegrees = (props: IsActiveProps): IsActiveMatrix => {
  const { degreeMatrix, activeElementIds } = props
  const activeDegreeIds = activeElementIds as ReadonlyArray<DegreeIds>
  const mapDegree = (degree: Degree | undefined): IsActiveIds | undefined => (
    degree && activeDegreeIds.includes(degree.id) ? IsActiveIds.Active : IsActiveIds.Inactive
  )
  const mapDegreeRow = (degreeRow: DegreeRow): IsActiveRow => (degreeRow.map(mapDegree))

  const isActiveMatrix: IsActiveMatrix = degreeMatrix.map(mapDegreeRow)
  return isActiveMatrix
}

export const getIsActiveMatrixForPitches = (props: IsActiveProps): IsActiveMatrix => {
  const { pitchMatrix, activeElementIds } = props
  const activePitchIds = activeElementIds as ReadonlyArray<PitchIds>
  const mapPitch = (pitch: Pitch | undefined): IsActiveIds | undefined => (
    pitch && activePitchIds.includes(pitch.id) ? IsActiveIds.Active : IsActiveIds.Inactive
  )
  const mapPitchRow = (pitch: PitchRow): IsActiveRow => (pitch.map(mapPitch))

  const isActiveMatrix: IsActiveMatrix = pitchMatrix.map(mapPitchRow)
  return isActiveMatrix
}