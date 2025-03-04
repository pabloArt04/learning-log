package main

import "fmt"

func deleteValue(arr []int, n int, x int) int {
	i := 0
	for i < n && arr[i] != x {
		i++
	}

	if i >= n {
		fmt.Println("The value", x, "is not found in the array")
	} else {
		for K := i; K < n-1; K++ {
			arr[K] = arr[K+1]
		}
		n--
	}

	return n
}

// func main() {
// 	arr := make([]int, 100)
// 	arr[0] = 1
// 	arr[1] = 2
// 	arr[2] = 3
// 	arr[3] = 4
// 	arr[4] = 5
// 	n := 5
// 	x := 3

// 	fmt.Println("Array before deletion:", arr[:n])
// 	n = deleteValue(arr, n, x)
// 	fmt.Println("Array after deletion:", arr[:n])
// }
