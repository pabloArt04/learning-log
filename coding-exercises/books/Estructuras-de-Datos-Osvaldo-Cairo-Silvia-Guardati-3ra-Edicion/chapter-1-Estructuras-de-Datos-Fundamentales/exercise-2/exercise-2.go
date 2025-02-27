package main

import "fmt"

// EN UN ARREGLO UNIDIMENSIONAL SE ALMACENAN LAS CALIlCACIONES FINALES DE N ALUMNOS
// DE UN CURSO UNIVERSITARIO ESCRIBA UN PROGRAMA QUE CALCULE E IMPRIMA
// (a) - EL PROMEDIO GENERAL DEL GRUPO
// (b) - NÚMERO DE ALUMNOS APROBADOS Y REPROBADOS
// (c) - PORCENTAJE DE ALUMNOS APROBADOS Y REPROBADOS
// (d) - NÚMERO DE ALUMNOS CUYA CALIlCACIÓN FUE MAYOR O IGUAL A 8

func main() {
	var students [10]int
	var sum, average int
	var approved, failed int
	var eightOrMore int

	students[0] = 8
	students[1] = 5
	students[2] = 6
	students[3] = 8
	students[4] = 9
	students[5] = 10
	students[6] = 6
	students[7] = 7
	students[8] = 9
	students[9] = 10

	for i := 0; i < 10; i++ {
		sum += students[i]

		if students[i] > 5 {
			approved++
		} else {
			failed++
		}

		if students[i] >= 8 {
			eightOrMore++
		}
	}
	average = sum / 10

	fmt.Println("Average:", average)
	fmt.Println("Approved students:", approved)
	fmt.Println("Failed students percentage:", failed)
	fmt.Println("Approved students percentage:", approved*100/10)
	fmt.Println("Failed students:", failed*100/10)
	fmt.Println("Students with eight or more:", eightOrMore)
}
