package main

import "fmt"

func insertValue(arr []int, n *int, value int) {
	if *n < 100 {
		*n = *n + 1
		arr[*n-1] = value
	} else {
		fmt.Println("The array is full")
	}
}

// func main() {
// 	arr := make([]int, 100)
// 	n := 0
// 	value := 5

// 	insertValue(arr, &n, value)
// 	fmt.Println(arr)
// }
