import { ListNode, middleNode } from "./solution-2"

test('list includes one elems should return the first node', () => {
  const head = new ListNode(1)
  const middleNodeRes = middleNode(head)
  expect(middleNodeRes?.val).toBe(1)
  expect(middleNodeRes?.next).toBeNull()
})

test('list include two elems should return the second node', () => {
  const head = new ListNode(1, new ListNode(2))
  const middleNodeRes = middleNode(head)
  expect(middleNodeRes?.val).toBe(2)
  expect(middleNodeRes?.next).toBeNull()
})

test('list include three elems should return the second node', () => {
  const head = new ListNode(1, new ListNode(2, new ListNode(3)))
  const middleNodeRes = middleNode(head)
  expect(middleNodeRes?.val).toBe(2)
  expect(middleNodeRes?.next?.val).toBe(3)
  expect(middleNodeRes?.next?.next).toBeNull()
})

test('list include forth elems should return the third node', () => {
  const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
  const middleNodeRes = middleNode(head)
  expect(middleNodeRes?.val).toBe(3)
  expect(middleNodeRes?.next?.val).toBe(4)
  expect(middleNodeRes?.next?.next).toBeNull()
})

test('list include five elems should return the third node', () => {
  const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
  const middleNodeRes = middleNode(head)
  expect(middleNodeRes?.val).toBe(3)
  expect(middleNodeRes?.next?.val).toBe(4)
  expect(middleNodeRes?.next?.next?.val).toBe(5)
  expect(middleNodeRes?.next?.next?.next).toBeNull()
})