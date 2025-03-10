package main

import (
	"fmt"
	"math/rand"
)

const N int = 5

// ESCRIBA UN PROGRAMA QUE INTERCAMBIE POR RENGLÓN LOS ELEMENTOS DE UN ARREGLO BIDI
// MENSIONAL ,LOS ELEMENTOS DEL RENGLÓN 1 DEBEN INTERCAMBIARSE CON LOS DEL RENGLÓN N.
// LOS DEL RENGLÓN 2 CON LOS DEL N-1 Y ASÍ SUCESIVAMENTE.
func main() {
	var matrix [N][N]int

	// fill
	for i := range N {
		for j := range N {
			matrix[i][j] = rand.Intn(10)
		}
	}

	// before
	for i := range N {
		for j := range N {
			fmt.Print(" ", matrix[i][j])
		}
		fmt.Println()
	}
	fmt.Println()

	for i := range N / 2 {
		for j := range N {
			matrix[i][j], matrix[N-1-i][j] = matrix[N-1-i][j], matrix[i][j]
		}
	}

	// after
	for i := range N {
		for j := range N {
			fmt.Print(" ", matrix[i][j])
		}
		fmt.Println()
	}
}
