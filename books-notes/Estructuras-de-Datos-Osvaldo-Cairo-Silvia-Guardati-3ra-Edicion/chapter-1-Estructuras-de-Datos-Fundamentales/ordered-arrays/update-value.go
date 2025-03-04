package main

import "fmt"

// This is a task from the book
func updateValue(arr []int, n *int, old, newValue int) {
	if *n > 0 {
		pos := sequentialSearch(arr, old)
		if pos < 0 {
			fmt.Println("The value", old, "is not found in the array")
		} else if (pos > 0 && arr[pos-1] > newValue) || (pos < *n-1 && arr[pos+1] < newValue) {
			deleteValue(arr, n, old)
			insertValue(arr, n, newValue)
		} else {
			arr[pos] = newValue
		}
	} else {
		fmt.Println("The array is empty")
	}
}

// func main() {
// 	arr := make([]int, 100)
// 	arr[0] = 1
// 	arr[1] = 4
// 	arr[2] = 8
// 	arr[3] = 10
// 	arr[4] = 15
// 	n := 5
// 	old := 15
// 	newValue := 11

// 	fmt.Println("before updateValue", arr[:n])
// 	updateValue(arr, &n, old, newValue)
// 	fmt.Println("after updateValue", arr[:n])
// }
