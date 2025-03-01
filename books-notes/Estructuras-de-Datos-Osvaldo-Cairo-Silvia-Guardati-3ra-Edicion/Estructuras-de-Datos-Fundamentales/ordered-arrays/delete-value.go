package main

import "fmt"

func deleteValue(arr []int, n *int, x int) {
	if *n > 0 {
		pos := sequentialSearch(arr, x)
		if pos < 0 {
			fmt.Println("The value", x, "is not found in the array")
		} else {
			*n--
			for i := pos; i < *n; i++ {
				arr[i] = arr[i+1]
			}
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
// 	x := 8

// 	fmt.Println("before deleteValue", arr[:n])
// 	deleteValue(arr, &n, x)
// 	fmt.Println("after deleteValue", arr[:n])
// }
