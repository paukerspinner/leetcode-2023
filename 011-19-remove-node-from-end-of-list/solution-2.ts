export class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next?: ListNode | null) {
    this.val = val
    this.next = next === undefined ? null : next
  }
}

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let firstPointer = head
  let secondPointer = head
  for (let i = 0; i < n; i ++) {
    firstPointer = firstPointer!.next
  }

  if (firstPointer === null) {
    return head!.next
  } else {
    while (firstPointer?.next !== null) {
      firstPointer = firstPointer!.next
      secondPointer = secondPointer!.next
    }
    secondPointer!.next = secondPointer!.next?.next || null
    return head
  }
};