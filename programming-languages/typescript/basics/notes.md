## TypeScript Compilation Commands

### Compile Without Emitting on Errors

```bash
tsc --noEmitOnError hello.ts
```

This command compiles the `hello.ts` file using the TypeScript compiler (`tsc`). The `--noEmitOnError` option ensures that no output files are generated if any errors occur during the compilation process.

### Specify Target ECMAScript Version

```bash
tsc hello.ts --target ES2015
```

This command specifies the target ECMAScript version for the output JavaScript. By using `--target ES2015`, the TypeScript compiler will generate JavaScript code compatible with ECMAScript 2015. This process is known as "downleveling," where TypeScript transpiles modern TypeScript or JavaScript code into an older version of JavaScript to ensure compatibility with environments that do not support newer ECMAScript features.

## TypeScript Compiler Options

### `noImplicitAny`

When enabled, the `noImplicitAny` flag generates an error for any variable whose type is implicitly inferred as `any`. By default, TypeScript may fall back to the `any` type when it cannot infer a more specific type. While this behavior is similar to JavaScript, it undermines the benefits of TypeScript's type system. Enabling `noImplicitAny` ensures stricter type checking, leading to fewer errors and better tooling support.

### `strictNullChecks`

The `strictNullChecks` flag enforces explicit handling of `null` and `undefined` values. By default, these values are assignable to any type, which can lead to unexpected runtime errors. Enabling `strictNullChecks` ensures that `null` and `undefined` are treated as distinct types, requiring developers to handle them explicitly. This helps prevent common errors associated with unhandled `null` or `undefined` values.
