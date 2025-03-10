package main

import "fmt"

const N = 4

// ESCRIBA UN PROGRAMA QUE LLENE DE CEROS UNA MATRIZ. EXCEPTO EN LA DIAGONAL
// PRINCIPAL DONDE DEBE ASIGNAR 1
func main() {
	var matrix [N][N]int

	for i := range N {
		matrix[i][i] = 1
	}

	for i := range N {
		for j := range N {
			fmt.Print(" ", matrix[i][j])
		}
		fmt.Println()
	}
}
