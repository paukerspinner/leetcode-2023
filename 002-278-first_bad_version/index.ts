import isBadVersion from "./is-bad-version"

export default function findFirstBadVersion(n: number): number {
  let [left, right, firstBadVersion] = [1, n, n]

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (isBadVersion(mid)) {
      firstBadVersion = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return firstBadVersion
};