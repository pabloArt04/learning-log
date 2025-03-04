package main

import (
	"fmt"
)

func sequentialSearch(arr []int, x int) {
	i := 0
	n := len(arr)

	for i < n && arr[i] != x {
		i++
	}

	if i >= n {
		fmt.Println("The value", x, "is not in the array")
	} else {
		fmt.Println("The value", x, "is at position", i)
	}
}

// func main() {
// 	arr := []int{1, 2, 3, 4, 5}
// 	x := 3
// 	sequentialSearch(arr, x)
// }
