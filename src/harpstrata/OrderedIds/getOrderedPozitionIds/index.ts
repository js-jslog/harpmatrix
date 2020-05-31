import { PozitionIds } from '../../Pozition'

export const getAscendingPozitionIds = (originId: PozitionIds = PozitionIds.First): ReadonlyArray<PozitionIds> => {
  const ascendingPozitionIds = Object.values(PozitionIds)

  const originIndex = ascendingPozitionIds.indexOf(originId)

  const head = [ ...ascendingPozitionIds.slice(originIndex) ]
  const tail = [ ...ascendingPozitionIds.slice(0, (originIndex)) ]

  return [ ...head, ...tail ]
}

export const getPozitionRootOffset = (pozitionId: PozitionIds): number => getAscendingPozitionIds().indexOf(pozitionId)