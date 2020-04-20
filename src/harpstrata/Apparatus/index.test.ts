import { ApparatusIds } from './types'
import { getActiveApparatusIds, getApparatus } from './index'
import { MAJOR_DIATONIC_APPARATUS } from './constants'

test('getActiveApparatusIds function returns an array of the available apparatus', () => {
  const expectedArray = [ ApparatusIds.MajorDiatonic ]
  const actualArray = getActiveApparatusIds()

  expect(actualArray).toStrictEqual(expectedArray)
})

test('getApparatus function can return a major diatonic apparatus', () => {
  const actualApparatus = getApparatus(ApparatusIds.MajorDiatonic)

  expect(actualApparatus).toStrictEqual(MAJOR_DIATONIC_APPARATUS)
})