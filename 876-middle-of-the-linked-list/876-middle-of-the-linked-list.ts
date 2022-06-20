/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;
  let a_pointer = head;
  let b_pointer = head;

  while (b_pointer.next !== null) {
    a_pointer = a_pointer.next;
    b_pointer = b_pointer.next;
    if (!b_pointer?.next) {
      return a_pointer;
    }
    b_pointer = b_pointer.next;
  }
  return a_pointer;
}
