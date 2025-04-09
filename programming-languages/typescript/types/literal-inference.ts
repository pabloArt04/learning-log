// Literal Inference in TypeScript

// When initializing an object, TypeScript assumes its properties may change later.
// So instead of inferring the literal type `0`, it infers the broader type `number`.

const obj = { counter: 0 }; // inferred as: { counter: number }

if (Math.random() > 0.5) {
  obj.counter = 1; // ✅ OK because `counter` is of type `number`
}

// TypeScript does NOT treat assigning 1 to something that started as 0 as an error.
// Why? Because types control how values can be read AND written, and `number` includes both 0 and 1.

// ------------------------------

// To preserve literal types (e.g., to lock `counter` as 0), you can use `as const`:

const locked = { counter: 0 } as const;

// locked.counter = 1; ❌ Error: Cannot assign to 'counter' because it is a read-only property
// Also, `locked.counter` is of type `0` (a literal), not `number`

// ------------------------------

// Alternative: Explicitly type the property
const another: { counter: 0 } = { counter: 0 };

// another.counter = 1; ❌ Error: Type '1' is not assignable to type '0'
