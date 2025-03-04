package main

func sequentialSearch(arr []int, x int) int {
	i := 0
	n := len(arr)
	for i < n && arr[i] < x {
		i++
	}
	if i >= n || arr[i] != x {
		return -i
	}
	return i
}

// func main() {
// 	arr := []int{1, 2, 3, 4, 5}
// 	n := 5
// 	x := 3

// 	i := sequentialSearch(arr, n, x)
// 	if i < 0 {
// 		println("The value", x, "is not found in the array")
// 	} else {
// 		println("The value", x, "is found in the array at index", i)
// 	}
// }
