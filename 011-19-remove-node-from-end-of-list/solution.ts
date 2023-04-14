export class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next?: ListNode | null) {
    this.val = val
    this.next = next === undefined ? null : next
  }
}

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = 0
  let currentNode = head
  while (currentNode !== null) {
    length ++
    currentNode = currentNode.next
  }
  const nthFromFirst = length - n
  if (nthFromFirst === 0) {
    return head!.next
  } else {
    let previousNthNode = head
    for (let i = 0; i < nthFromFirst - 1; i ++) {
      previousNthNode = previousNthNode!.next
    }
    previousNthNode!.next = previousNthNode?.next?.next || null
    return head
  }
};