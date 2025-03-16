package main

func fibonacciIterative(n int) int {
	if n == 0 || n == 1 {
		return n
	}

	fibA, fibB := 0, 1
	var output int

	for i := 2; i <= n; i++ {
		output = fibA + fibB
		fibA = fibB
		fibB = output
	}

	return output
}

// func main() {
// 	n := 4
// 	fmt.Println(fibonacciIterative(n))
// }
