package main

import "fmt"

func twoSum(nums []int, target int) []int {
	positions := make(map[int]int)
	var index1, index2 int
	var ok bool

	for i, value := range nums {
		positions[value] = i
	}

	for i, value := range nums {
		index1 = i
		index2, ok = positions[target-value]
		if ok && index1 != index2 {
			break
		}
	}

	return []int{index1, index2}
}

func main() {
	nums := []int{3, 2, 4}
	output := twoSum(nums, 6)
	fmt.Println(output)
}
