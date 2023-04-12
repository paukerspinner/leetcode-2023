export function twoSum(numbers: number[], target: number): number[] {
  let [lp, rp] = [0, numbers.length - 1]
  while (numbers[lp] + numbers[rp] !== target) {
    if (numbers[lp] + numbers[rp] < target) {
      lp ++
    } else {
      rp --
    }
  }
  return [lp + 1, rp + 1]
};