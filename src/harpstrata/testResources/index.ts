import { EXAMPLE_PITCH_MATRICES } from '../Pitch/testResources'
import { EXAMPLE_IS_ACTIVE_COMPLEXES } from '../IsActive'
import type { HarpStrata } from '../HarpStrata'
import { EXAMPLE_DEGREE_MATRICES } from '../Degree/testResources'
import { MAJOR_DIATONIC_APPARATUS } from '../Apparatus/constants'

const C_MAJOR_DIATONIC_FIRST_POZITION_C_MAJOR_PENTATONIC: HarpStrata = {
  apparatus: MAJOR_DIATONIC_APPARATUS,
  degreeMatrix: EXAMPLE_DEGREE_MATRICES.MAJOR_DIATONIC_FIRST_POZITION,
  pitchMatrix: EXAMPLE_PITCH_MATRICES.MAJOR_DIATONIC_C_HARMONICA,
  isActiveComplex: EXAMPLE_IS_ACTIVE_COMPLEXES.C_MAJOR_DIATONIC_FIRST_POZITION_C_MAJOR_PENTATONIC,
} as const

const C_MAJOR_DIATONIC_SECOND_POZITION_G_MAJOR_PENTATONIC: HarpStrata = {
  apparatus: MAJOR_DIATONIC_APPARATUS,
  degreeMatrix: EXAMPLE_DEGREE_MATRICES.MAJOR_DIATONIC_SECOND_POZITION,
  pitchMatrix: EXAMPLE_PITCH_MATRICES.MAJOR_DIATONIC_C_HARMONICA,
  isActiveComplex: EXAMPLE_IS_ACTIVE_COMPLEXES.C_MAJOR_DIATONIC_SECOND_POZITION_G_MAJOR_PENTATONIC,
} as const

export const EXAMPLE_STRATA = {
  C_MAJOR_DIATONIC_FIRST_POZITION_C_MAJOR_PENTATONIC,
  C_MAJOR_DIATONIC_SECOND_POZITION_G_MAJOR_PENTATONIC,
} as const
