package main

import (
	"fmt"
	"slices"
)

type Queue struct {
	front  int
	tail   int
	max    int
	values []string
}

func NewQueue(max int) *Queue {
	return &Queue{-1, -1, max, make([]string, max)}
}

func (q *Queue) Enqueue(value string) error {
	if q.tail+1 < q.max { // If the queue is not full
		q.tail++
		q.values[q.tail] = value
		if q.tail == 0 {
			q.front = 0
		}
		return nil
	}
	return fmt.Errorf("Queue is full")
}

// dequeue increase the front pointer to simulate deleting the first element
// when using an array this causes memory to be wasted, avoid this by using circular queues
func (q *Queue) Dequeue() (string, error) {
	if q.front != -1 {
		value := q.values[q.front]
		if q.front == q.tail {
			q.front = -1
			q.tail = -1
		} else {
			q.front++
		}
		return value, nil
	}
	return "", fmt.Errorf("Queue is empty")
}

func main() {
	days := []string{"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"}
	queue := NewQueue(7)

	for _, day := range days {
		queue.Enqueue(day)
		fmt.Println(queue.values, queue.front, queue.tail)
	}

	for range 5 {
		value, err := queue.Dequeue()
		if err != nil {
			fmt.Println(err)
		}
		fmt.Println(value, queue.values, queue.front, queue.tail)
	}

	slices.Reverse(days)
	for _, day := range days[:5] {
		err := queue.Enqueue(day)
		if err != nil {
			fmt.Println(err)
		}
		fmt.Println(queue.values, queue.front, queue.tail)
	}

	queue.Dequeue()
	queue.Dequeue()

	for _, day := range days {
		err := queue.Enqueue(day)
		if err != nil {
			fmt.Println(err)
		}
		fmt.Println(queue.values, queue.front, queue.tail)
	}
}
