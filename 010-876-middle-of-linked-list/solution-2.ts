export class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next?: ListNode | null) {
    this.val = val
    this.next = next === undefined ? null : next
  }
}


export function middleNode(head: ListNode | null): ListNode | null {
  let [slowPointer, fastPointer] = [head, head]
  while(fastPointer?.next) {
    slowPointer = slowPointer!.next
    fastPointer = fastPointer.next.next
  }
  return slowPointer
};