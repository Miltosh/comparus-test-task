export const getRandomCellIndex = (availableIndexes: number[]) => {
  const random = Math.floor(Math.random() * availableIndexes.length)
  return availableIndexes[random]
}
