package main

import (
	"fmt"
	"math/rand"
)

const M = 5
const N = 7

func printMatrix(matrix [M][N]int) {
	for i := range M {
		for j := range N {
			fmt.Print(" ", matrix[i][j])
		}
		fmt.Println()
	}
	fmt.Println()
}

func main() {
	var data [M][N]int
	var maxValuesRows [M]int
	var maxValuesCols [N]int
	for i := range M {
		for j := range N {
			data[i][j] = rand.Intn(10)
		}
	}
	printMatrix(data)

	for i := range M {
		for j := range N {
			value := data[i][j]
			if value > maxValuesRows[i] {
				maxValuesRows[i] = value
			}
			if value > maxValuesCols[j] {
				maxValuesCols[j] = value
			}
		}
	}

	fmt.Println(maxValuesRows, maxValuesCols)
}
