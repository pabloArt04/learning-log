package main

// A multidimensional array is a finite collection of elements,
// to refer to each element we need to use N indexes,
// where N is the number of dimensions of the array.

func main() {
	var data [2][3][4]int

	// Fill the array
	for i := range 2 {
		for j := range 3 {
			for k := range 4 {
				data[i][j][k] = i + j + k
			}
		}
	}

	// Print the array
	for i := range 2 {
		for j := range 3 {
			for k := range 4 {
				print(data[i][j][k], " ")
			}
			println()
		}
	}
}
