package main

// EN UN ARREGLO UNIDIMENSIONAL SE HA ALMACENADO EL NÚMERO TOTAL DE TONELADAS DE
// CEREALES COSECHADAS DURANTE CADA MES DEL AÑO ANTERIOR ESCRIBA UN PROGRAMA QUE
// OBTENGA E IMPRIMA LA SIGUIENTE INFORMACIÓN:
// (a) - EL PROMEDIO ANUAL DE TONELADAS COSECHADAS
// (b) - CUÁNTOS MESES TUVIERON COSECHA SUPERIOR AL PROMEDIO ANUAL
// (c) - CUÁNTOS MESES TUVIERON COSECHA INFERIOR AL PROMEDIO ANUAL

import "fmt"

func main() {
	var production [12]int
	var sum, average int
	var monthsLessThanAvg int
	var monthsGreaterThanAvg int

	production[0] = 10
	production[1] = 11
	production[2] = 9
	production[3] = 15
	production[4] = 7
	production[5] = 13
	production[6] = 8
	production[7] = 9
	production[8] = 8
	production[9] = 11
	production[10] = 16
	production[11] = 21

	for i := 0; i < 12; i++ {
		sum += production[i]
	}
	average = sum / 12

	for i := 0; i < 12; i++ {
		if production[i] > average {
			monthsGreaterThanAvg++
		} else if production[i] < average {
			monthsLessThanAvg++
		}
	}

	fmt.Println("Average:", average)
	fmt.Println("Months greater than average:", monthsGreaterThanAvg)
	fmt.Println("Months less than average:", monthsLessThanAvg)
}
