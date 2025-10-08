export function getNextCycle(currentCircle: number) {
  return currentCircle === 0 || currentCircle === 8 ? 1 : currentCircle + 1;
}
