package main

import "fmt"

// factorialRecursive calculates the factorial of a non-negative integer n recursively
func factorialRecursive(n int) int {
	if n == 0 {
		return 1 // Base case
	}
	return n * factorialRecursive(n-1) // Recursive step
}

func main() {
	n := 5
	fmt.Printf("Factorial of %d is %d\n", n, factorialRecursive(n))
}
