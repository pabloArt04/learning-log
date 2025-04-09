// null and undefined in TypeScript

// JavaScript has two special values for absence: `null` and `undefined`.
// TypeScript has corresponding types: `null` and `undefined`.

// Their behavior depends on the `strictNullChecks` compiler option.

// -------------------------------
// strictNullChecks: OFF
// -------------------------------

// With strictNullChecks off, `null` and `undefined` can be assigned to any type.
let count: number = null; // ✅ allowed

// This can lead to runtime errors if not handled carefully.

// -------------------------------
// strictNullChecks: ON (recommended)
// -------------------------------

// Now, you must explicitly handle `null` and `undefined` in unions.

function doSomething(x: string | null) {
  if (x === null) {
    // Handle null case
    return;
  }

  // Now `x` is narrowed to `string`
  console.log("Hello, " + x.toUpperCase()); // ✅ Safe
}

// -------------------------------
// Non-null assertion operator (!)
// -------------------------------

// Use `!` to tell TypeScript that a value is NOT null or undefined,
// even if the type allows it. ⚠️ Use with caution.

function liveDangerously(x?: number | null) {
  // Using `!` bypasses null/undefined checks
  console.log(x!.toFixed()); // ❗ Could throw at runtime if x is null/undefined
}

// Only use `!` when you're absolutely sure the value is not null or undefined.
