package main

import "fmt"

type simplyLinkedListNode struct {
	value int
	next  *simplyLinkedListNode
}

type simplyLinkedList struct {
	front *simplyLinkedListNode
}

func (list *simplyLinkedList) insertFront(value int) {
	newNode := new(simplyLinkedListNode)
	newNode.value = value
	newNode.next = list.front
	list.front = newNode
}

func (list *simplyLinkedList) insertBack(value int) {
	aux := list.front
	for aux.next != nil {
		aux = aux.next
	}
	newNode := new(simplyLinkedListNode)
	newNode.value = value
	newNode.next = nil
	aux.next = newNode
}

func (list *simplyLinkedList) insertBefore(x, value int) error {
	aux1 := list.front
	var aux2 *simplyLinkedListNode
	found := true

	for aux1.value != x && found {
		if aux1.next != nil {
			aux2 = aux1
			aux1 = aux1.next
		} else {
			found = false
		}
	}

	if found {
		newNode := new(simplyLinkedListNode)
		newNode.value = value
		if list.front == aux1 { // Insert before the first node
			newNode.next = list.front
			list.front = newNode
		} else {
			aux2.next = newNode
			newNode.next = aux1
		}
	} else {
		return fmt.Errorf("Node %d not found", x)
	}
	return nil
}

func (list *simplyLinkedList) insertAfter(x, value int) error {
	aux := list.front
	found := true

	for aux.value != x && found {
		if aux.next != nil {
			aux = aux.next
		} else {
			found = false
		}
	}

	if found {
		newNode := new(simplyLinkedListNode)
		newNode.value = value
		newNode.next = aux.next
		aux.next = newNode
	} else {
		return fmt.Errorf("Node %d not found", x)
	}
	return nil
}

func (list *simplyLinkedList) deleteFront() {
	list.front = list.front.next
}

func (list *simplyLinkedList) deleteBack() {
	aux1 := list.front
	var aux2 *simplyLinkedListNode

	if list.front.next == nil { // Only one node in the list
		list.front = nil
	} else {
		for aux1.next != nil {
			aux2 = aux1
			aux1 = aux1.next
		}
		aux2.next = nil
	}
}

func (list *simplyLinkedList) delete(x int) error {
	aux1 := list.front
	var aux2 *simplyLinkedListNode
	found := true

	for aux1.value != x && found {
		if aux1.next != nil {
			aux2 = aux1
			aux1 = aux1.next
		} else {
			found = false
		}
	}

	if !found {
		return fmt.Errorf("Node %d not found", x)
	}

	if list.front == aux1 { // Delete the first node
		list.front = list.front.next
	} else {
		aux2.next = aux1.next
	}
	return nil
}

func printList(list *simplyLinkedList) {
	for node := list.front; node != nil; node = node.next {
		fmt.Print(node.value, " ")
	}
	fmt.Println()
}

func main() {
	list := new(simplyLinkedList)
	list.insertFront(1)
	printList(list)
	list.insertFront(2)
	printList(list)
	list.insertBack(10)
	printList(list)
	list.insertFront(3)
	printList(list)
	list.insertFront(4)
	printList(list)
	list.insertBack(-5)
	printList(list)
	list.insertFront(5)
	printList(list)
	list.insertBefore(3, 6)
	printList(list)
	list.insertBefore(10, 7)
	printList(list)
	list.insertBefore(1, 8)
	printList(list)
	list.insertBefore(5, 9)
	printList(list)
	list.insertAfter(3, 11)
	printList(list)
	list.insertAfter(10, 12)
	printList(list)
	list.insertAfter(1, 13)
	printList(list)
	list.insertAfter(-5, 14)
	printList(list)

	list.deleteFront()
	printList(list)
	list.deleteFront()
	printList(list)
	list.deleteBack()
	printList(list)
	list.deleteBack()
	printList(list)
	list.delete(6)
	printList(list)
	list.delete(7)
	printList(list)
	err := list.delete(81)
	fmt.Println(err)
	printList(list)
}
