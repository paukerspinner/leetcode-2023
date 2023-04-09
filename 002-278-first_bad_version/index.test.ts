import findFirstBadVersion from "."
import isBadVersion from "./is-bad-version"

jest.mock('./is-bad-version')
const mockedIsBadVersion = isBadVersion as jest.MockedFunction<typeof isBadVersion>

test('first example should return 4', () => {
  mockedIsBadVersion.mockImplementation((version: number) => version >= 4)
  expect(findFirstBadVersion(5)).toBe(4)
})

test('second example should return 1', () => {
  mockedIsBadVersion.mockImplementation((version: number) => version >= 1)
  expect(findFirstBadVersion(1)).toBe(1)
})

test('the first bad version is at the first should return 1', () => {
  mockedIsBadVersion.mockImplementation((version: number) => version >= 1)
  expect(findFirstBadVersion(5)).toBe(1)
})

test('the first bad version is at the end should return 6', () => {
  mockedIsBadVersion.mockImplementation((version: number) => version >= 6)
  expect(findFirstBadVersion(6)).toBe(6)
})

test('the number of versions is odd should return 5', () => {
  mockedIsBadVersion.mockImplementation((version: number) => version >= 5)
  expect(findFirstBadVersion(7)).toBe(5)
})

test('the number of versions is even should return 8', () => {
  mockedIsBadVersion.mockImplementation((version: number) => version >= 8)
  expect(findFirstBadVersion(19)).toBe(8)
})

test('number of version is big should return 1702766719', () => {
  mockedIsBadVersion.mockImplementation((version: number) => version >= 1702766719)
  expect(findFirstBadVersion(2126753390)).toBe(1702766719)
})