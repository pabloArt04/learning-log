package main

import "fmt"

func calculatePosition(columns, i, j int) int {
	return i*columns + j
}

func main() {
	const rows, columns = 3, 2
	var array [rows * columns]int

	for i := range rows * columns {
		array[i] = i + 1
	}

	for i := range rows {
		for j := range columns {
			index := calculatePosition(columns, i, j)
			fmt.Printf("position [%d][%d] is in array[%d]\n", i, j, index)
		}
	}

	for i := range rows {
		for j := range columns {
			index := calculatePosition(columns, i, j)
			fmt.Print(array[index], " ")
		}
		fmt.Println()
	}
}
