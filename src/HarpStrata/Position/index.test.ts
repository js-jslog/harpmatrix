import { getActivePositionIds, getPosition } from './index'
import { PositionIds } from './types'
import { EXAMPLE_POSITIONS } from './testResources'

test('getActivePositionIds function returns an array of the available positions', () => {
  const expectedArray = [ PositionIds.First, PositionIds.Second ]
  const actualArray = getActivePositionIds()

  expect(actualArray).toStrictEqual(expectedArray)
})

test('getPosition function can return a first position', () => {
  const { FIRST_POSITION } = EXAMPLE_POSITIONS
  const actualPosition = getPosition(FIRST_POSITION.id)

  expect(actualPosition).toStrictEqual(FIRST_POSITION)
})