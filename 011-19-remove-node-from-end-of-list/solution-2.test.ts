import { ListNode, removeNthFromEnd } from "./solution-2"

test('for the linked list with five elem and remove 2th from the end should remove 4-th node', () => {
  const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
  const result = removeNthFromEnd(head, 2)
  expect(result?.val).toBe(1)
  expect(result?.next?.val).toBe(2)
  expect(result?.next?.next?.val).toBe(3)
  expect(result?.next?.next?.next?.val).toBe(5)
  expect(result?.next?.next?.next?.next).toBeNull()
})

test('for the linked list with only one node remove 1st should remove the first one and return node of null', () => {
  const head = new ListNode(1)
  const result = removeNthFromEnd(head, 1)
  expect(result).toBeNull()
})

test('for the linked list with 3 nodes, remove 1st from end should remove the last node', () => {
  const head = new ListNode(1, new ListNode(2, new ListNode(3)))
  const result = removeNthFromEnd(head, 1)
  expect(result?.val).toBe(1)
  expect(result?.next?.val).toBe(2)
  expect(result?.next?.next).toBeNull()
})

test('for the linked list with 3 nodes, remove 3rd from end shoud remove the first node', () => {
  const head = new ListNode(1, new ListNode(2, new ListNode(3)))
  const result = removeNthFromEnd(head, 3)
  expect(result?.val).toBe(2)
  expect(result?.next?.val).toBe(3)
  expect(result?.next?.next).toBeNull()
})

test('for the linked list with 2 nodes, remove 1st from end should remove the last one', () => {
  const head = new ListNode(1, new ListNode(2))
  const result = removeNthFromEnd(head, 1)
  expect(result?.val).toBe(1)
  expect(result?.next).toBeNull()
})

test('for the linked list with 2 nodes, remove 2rd from end should remove the first one', () => {
  const head = new ListNode(1, new ListNode(2))
  const result = removeNthFromEnd(head, 2)
  expect(result?.val).toBe(2)
  expect(result?.next).toBeNull()
})