package main

import "fmt"

func insertValue(arr []int, n *int, y int) {
	if *n < 100 {
		pos := sequentialSearch(arr, y)
		if pos > 0 {
			fmt.Println("The value", y, "is already in the array")
		} else {
			*n++
			pos = -pos
			for i := *n - 1; i > pos; i-- {
				arr[i] = arr[i-1]
			}
			arr[pos] = y
		}
	} else {
		fmt.Println("The array is full")
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
// 	y := 14

// 	fmt.Println("Array before insertion:", arr[:n])
// 	insertValue(arr, &n, y)
// 	fmt.Println("Array after insertion:", arr[:n])
// }
