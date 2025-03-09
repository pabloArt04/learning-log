package main

import "fmt"

// a stack is a data structure that follows the LIFO (Last In First Out) principle
// it has two main operations: push and pop
// push adds an element to the top of the stack
// pop removes the top element from the stack

type Stack struct {
	top    int
	max    int
	values []int
}

func NewStack(max int) *Stack {
	return &Stack{0, max, make([]int, max)}
}

// This implementation of a stack uses an array to store the values
// The top field keeps track of the next available position in the array

func (s *Stack) IsEmpty() bool {
	return s.top == 0
}

func (s *Stack) IsFull() bool {
	return s.top == s.max
}

func (s *Stack) Push(value int) error {
	if s.IsFull() {
		return fmt.Errorf("Stack is full")
	}
	s.values[s.top] = value
	s.top++
	return nil
}

func (s *Stack) Pop() (int, error) {
	if s.IsEmpty() {
		return 0, fmt.Errorf("Stack is empty")
	}
	s.top--
	return s.values[s.top], nil
}

func main() {
	stack := NewStack(5)
	for i := range 6 {
		if err := stack.Push(i); err != nil {
			fmt.Println(err)
		} else {
			fmt.Println("Pushed:", i)
		}
	}

	for range 6 {
		if value, err := stack.Pop(); err != nil {
			fmt.Println(err)
		} else {
			fmt.Println("Popped:", value)
		}
	}
}
