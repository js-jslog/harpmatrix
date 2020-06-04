import { PozitionIds } from '../types'

import { instanceMap } from './index'

test('Pozition instanceMap has exactly 12 mappings', () => {
  expect(instanceMap.size).toBe(12)
})

test('Pozition instanceMap has a mapping for each of the PozitionIds', () => {
  expect(instanceMap.get(PozitionIds.First)).toBeTruthy()
  expect(instanceMap.get(PozitionIds.Second)).toBeTruthy()
  expect(instanceMap.get(PozitionIds.Third)).toBeTruthy()
  expect(instanceMap.get(PozitionIds.Fourth)).toBeTruthy()
  expect(instanceMap.get(PozitionIds.Fifth)).toBeTruthy()
  expect(instanceMap.get(PozitionIds.Sixth)).toBeTruthy()
  expect(instanceMap.get(PozitionIds.Seventh)).toBeTruthy()
  expect(instanceMap.get(PozitionIds.Eighth)).toBeTruthy()
  expect(instanceMap.get(PozitionIds.Ninth)).toBeTruthy()
  expect(instanceMap.get(PozitionIds.Tenth)).toBeTruthy()
  expect(instanceMap.get(PozitionIds.Eleventh)).toBeTruthy()
  expect(instanceMap.get(PozitionIds.Twelfth)).toBeTruthy()
})

test('Each of the Pozition objects id is mapped from and identical key, thus also guaranteeing unique ids in the instances', () => {
  instanceMap.forEach((instance, key) => {
    expect(instance.id).toBe(key)
  })
})