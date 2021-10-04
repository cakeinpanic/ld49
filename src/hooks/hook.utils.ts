export const LAMP_ID = 'lamp'

export function getRandomBetween([min, max]: number[]) {
  const random = Math.random() * (max - min) + min

  return random
}
