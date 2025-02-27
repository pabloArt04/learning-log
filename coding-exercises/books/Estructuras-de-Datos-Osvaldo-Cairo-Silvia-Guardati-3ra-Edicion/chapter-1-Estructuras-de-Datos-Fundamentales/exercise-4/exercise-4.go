package main

import "fmt"

// DADO UN ARREGLO UNIDIMENSIONAL DE NÚMEROS ENTEROS ORDENADOS CRECIENTEMENTE
// ESCRIBA UN PROGRAMA QUE ELIMINE TODOS LOS ELEMENTOS REPETIDOS. CONSIDERE QUE DE
// HABER VALORES REPETIDOS ESTOS SE ENCONTRARÁN EN POSICIONES CONSECUTIVAS DEL ARREGLO

func main() {
	var arr [10]int
	arr[0] = 1
	arr[1] = 1
	arr[2] = 1
	arr[3] = 2
	arr[4] = 3
	arr[5] = 4
	arr[6] = 4
	arr[7] = 4
	arr[8] = 5
	arr[9] = 5

	j := 1
	for i := 1; i < len(arr); i++ {
		if arr[i] > arr[i-1] {
			arr[j] = arr[i]
			j++
		}
	}

	fmt.Println(arr[:j])
}
