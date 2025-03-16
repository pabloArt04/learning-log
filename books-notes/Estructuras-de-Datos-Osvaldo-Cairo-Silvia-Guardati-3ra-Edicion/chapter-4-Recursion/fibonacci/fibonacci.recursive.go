package main

import "fmt"

// fibonacciRecursive calculates the Fibonacci number for a given N recursively
func fibonacciRecursive(n int) int {
	if n == 0 || n == 1 {
		return n
	}
	return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}

func main() {
	n := 0
	fmt.Printf("Fibonacci number for %d is %d\n", n, fibonacciRecursive(n))
}
