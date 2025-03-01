package main

import (
	"fmt"
	"math/rand"
)

func main() {
	const rows, cols = 4, 3
	var matrix [rows][cols]int

	// Fill the matrix
	for i := range rows { // this loop iterates over the rows
		for j := range cols { // this loop iterates over the columns
			// i is the row index and j is the column index
			fmt.Printf("assign value to matrix[%d][%d]:\n", i, j)
			matrix[i][j] = rand.Intn(9)
		}
	}

	// Print the matrix
	for i := range rows {
		for j := range cols {
			fmt.Printf("%d ", matrix[i][j])
		}
		fmt.Println()
	}
}
