package main

import "fmt"

// ESCRIBA UN PROGRAMA QUE ALMACENE EN UN ARREGLO UNIDIMENSIONAL LOS PRIMEROS 30 NÚMEROS
// PERFECTOS UNN NÚMERO SE CONSIDERA PERFECTO SI LA SUMA DE LOS DIVISORES EXCEPTO
// EL MISMO ES IGUAL AL PROPIO NÚMERO EL 6 POR EJEMPLO ES UN NÚMERO PERFECTO

func main() {
	var nums [30]int
	var sum int
	var pos = 0

	for i := 1; pos < len(nums); i++ {
		sum = 0
		for j := 1; j < i; j++ {
			if i%j == 0 {
				sum += j
			}
		}
		if sum == i {
			nums[pos] = i
			pos += 1
		}
	}
	fmt.Println(nums)
}
