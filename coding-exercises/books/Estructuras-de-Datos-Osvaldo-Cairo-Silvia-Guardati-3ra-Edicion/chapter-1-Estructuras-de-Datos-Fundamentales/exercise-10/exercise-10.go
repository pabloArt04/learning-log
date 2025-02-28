package main

import (
	"fmt"
	"math/rand"
)

// SE TIENEN REGISTRADAS LAS CALIFICACIONES OBTENIDAS EN UN EXAMEN A 50 ALUMNOS ,LOS
// DATOS SON CAL¹, CAL², ..., CAL⁵⁰ DONDE CAL ES UN NÚMERO ENTERO COMPRENDIDO ENTRE LOS
// VALORES 0 Y 10 0 ≤ CALI ≤ 10
// ESCRIBA UN PROGRAMA QUE CALCULE E IMPRIMA LA FRECUENCIA DE CADA UNO DE LOS
// POSIBLES VALORES

func main() {
	var frequency [10]int
	var number int

	for i := 0; i < 50; i++ {
		number = rand.Intn(10)
		frequency[number]++
	}

	fmt.Println("Qualification\tFrequency")
	for i := 0; i < 10; i++ {
		fmt.Printf("%d\t\t\t\t%d\n", i, frequency[i])
	}
}
