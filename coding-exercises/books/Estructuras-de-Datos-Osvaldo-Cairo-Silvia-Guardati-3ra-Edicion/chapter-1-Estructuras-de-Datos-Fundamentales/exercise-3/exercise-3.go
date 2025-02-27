package main

import "fmt"

// DADA UNA CADENA DE CARACTERES COMO DATO SE DESEA SABER EL NÚMERO DE VECES QUE
// APARECEN LAS LETRAS 'a', 'b', ... 'z' Y 'A', 'B', ..., 'Z' EN DICHA CADENA
// ESCRIBA UN PROGRAMA QUE RESUELVA EL PROBLEMA

func main() {
	counter := new(CounterLetters)
	text := "AA ZaaaaaaHellooO WorLD! zz"

	for _, char := range text {
		counter.increase(char)
	}

	counter.printCounter()
}

type CounterLetters [52]int

func (counter *CounterLetters) increase(letter rune) {
	var index int
	if letter >= 'A' && letter <= 'Z' {
		index = int(letter) - 65
		counter[index]++
	} else if letter >= 'a' && letter <= 'z' {
		index = int(letter) - 71
		counter[index]++
	}
}

func (counter *CounterLetters) printCounter() {
	for index, v := range counter {
		if v == 0 {
			continue
		}

		if index >= 26 {
			fmt.Printf("%c: %d\n", index+71, v)
		} else {
			fmt.Printf("%c: %d\n", index+65, v)
		}
	}
}
