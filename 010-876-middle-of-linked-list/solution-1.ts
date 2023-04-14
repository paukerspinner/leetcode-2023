export class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next?: ListNode | null) {
    this.val = val
    this.next = next === undefined ? null : next
  }
}

export function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head
  }
  let length = 1
  let curentNode: ListNode = head
  while(curentNode.next) {
    length ++
    curentNode = curentNode.next
  }
  curentNode = head
  for (let i = 0; i < Math.floor(length / 2); i++) {
    curentNode = curentNode.next!
  }
  return curentNode
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
const middleNodeRes = middleNode(head)
console.log(middleNodeRes?.val)