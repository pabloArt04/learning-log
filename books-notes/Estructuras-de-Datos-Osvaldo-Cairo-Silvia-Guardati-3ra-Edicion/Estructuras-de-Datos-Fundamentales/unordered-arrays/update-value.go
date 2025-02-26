package main

import (
	"fmt"
)

func updateValue(arr []int, old, newValue int) {
	n := len(arr)
	i := 0

	for i < n && old != arr[i] {
		i++
	}

	if i >= n {
		fmt.Println("The value X is not found in the array")
	} else {
		arr[i] = newValue
	}
}

// func main() {
// 	arr := []int{1, 2, 3, 4, 5}
// 	old := 3
// 	newValue := 10

// 	updateValue(arr, old, newValue)
// 	fmt.Println(arr)
// }
