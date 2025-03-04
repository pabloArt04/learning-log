package main

import "fmt"

// Parallel arrays are arrays that have the same number of elements and are used to store related data
// in the same position in each array.
// Example:
// names[0] = "John"
// ages[0] = 25
// salaries[0] = 1500.50

func main() {
	var names [3]string
	var ages [3]int
	var salaries [3]float64

	names[0] = "John"
	ages[0] = 25
	salaries[0] = 1500.50

	names[1] = "Mary"
	ages[1] = 30
	salaries[1] = 2000.75

	names[2] = "Paul"
	ages[2] = 35
	salaries[2] = 2500.00

	for i := range 3 {
		fmt.Println("Name:", names[i])
		fmt.Println("Age:", ages[i])
		fmt.Println("Salary:", salaries[i])
		fmt.Println()
	}
}
