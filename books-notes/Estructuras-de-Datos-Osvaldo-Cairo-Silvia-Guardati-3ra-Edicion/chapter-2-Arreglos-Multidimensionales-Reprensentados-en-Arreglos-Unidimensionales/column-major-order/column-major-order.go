package main

import "fmt"

func calculatePosition(rows, i, j int) int {
	return j*rows + i
}

func main() {
	const rows, columns = 3, 2
	var array [rows * columns]int

	for i := range rows * columns {
		array[i] = i + 1
	}

	for i := range rows {
		for j := range columns {
			index := calculatePosition(rows, i, j)
			fmt.Printf("position [%d][%d] is in array[%d]\n", i, j, index)
		}
	}

	for i := range rows {
		for j := range columns {
			index := calculatePosition(rows, i, j)
			fmt.Print(array[index], " ")
		}
		fmt.Println()
	}
}
