# JavaScript Variable Declarations: `const`, `let`, `var`, and Implicit Globals

In JavaScript, variables can be declared using `const`, `let`, and `var` keywords, or without any keyword. Each method has different characteristics and scopes.

## `var`

- **Scope**: Function-scoped. Variables declared with `var` are accessible within the function they are declared in, or globally if declared outside any function.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope, meaning they can be used before they are declared (though they will be `undefined` until the declaration is encountered).
- **Re-declaration**: Can be re-declared within the same scope without an error.

```javascript
function example() {
  console.log(a); // undefined (hoisted)
  var a = 10;
  console.log(a); // 10
}
```

## `let`

- **Scope**: Block-scoped. Variables declared with let are only accessible within the block they are declared in (e.g., within a {} block).
- **Hoisting**: Variables declared with let are hoisted but not initialized. Accessing them before the declaration results in a ReferenceError.
- **Re-declaration**: Cannot be re-declared within the same block scope.

```javascript
function example() {
  // console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 20;
  console.log(b); // 20
}
```

## `const`

- **Scope**: Block-scoped. Similar to let, variables declared with const are accessible within the block they are declared in.
- **Hoisting**: Variables declared with const are hoisted but not initialized. Accessing them before the declaration results in a ReferenceError.
- **Re-declaration**: Cannot be re-declared within the same block scope.
- **Immutability**: The value assigned to a const variable cannot be changed through reassignment. However, if the variable is an object or array, its properties or elements can be modified.

```javascript
function example() {
  // console.log(c); // ReferenceError: Cannot access 'c' before initialization
  const c = 30;
  console.log(c); // 30
  // c = 40; // TypeError: Assignment to constant variable.
}
```

## `Without Any Keyword`

- **Scope**: Variables declared without any keyword are automatically created as properties of the global object (i.e., window in browsers, global in Node.js).
- **Hoisting**: Similar to var, these variables are accessible throughout their scope after being declared, but they do not undergo traditional hoisting. Instead, they are created when the execution reaches their declaration.
- **Re-declaration**: Can be re-declared without an error, since they are properties of the global object.

```javascript
function example() {
  d = 40; // Implicit global variable
  console.log(d); // 40
}
example();
console.log(d); // 40 (accessible globally)
```

# JavaScript Strict Mode

Strict mode in JavaScript is a way to opt into a restricted variant of JavaScript, thereby implicitly opting out of "sloppy mode". It helps catch common coding mistakes and "unsafe" actions such as accessing global variables accidentally.

## Key Features of Strict Mode

1. **Eliminates Some Silent Errors**

   - Throws errors for certain actions that are silent errors in normal JavaScript. For example, assigning to a non-writable property, assigning to a getter-only property, or assigning to a new property on a non-extensible object.

2. **Fixes Mistakes that Make it Difficult for JavaScript Engines to Perform Optimizations**

   - By fixing these mistakes, strict mode allows JavaScript engines to optimize code more efficiently.

3. **Prohibits Some Syntax Likely to be Defined in Future Versions of ECMAScript**

   - For example, `strict mode` reserves some keywords for future ECMAScript versions.

4. **Changes in `this` Behavior**
   - In strict mode, `this` is `undefined` in functions that are called without an explicit object context. In non-strict mode, `this` would refer to the global object (e.g., `window` in browsers).

## Enabling Strict Mode

### Globally

```javascript
"use strict";
```

### Function Scoped

```javascript
function example() {
  "use strict";
  // Function-level strict mode syntax
}
```

### Example

```javascript
"use strict";

function example() {
  // `this` will be undefined instead of the global object
  console.log(this); // undefined

  // Prevents accidental global variables
  // x = 10; // ReferenceError: x is not defined

  // Silent errors will throw
  const obj = {};
  Object.defineProperty(obj, "prop", {
    value: 42,
    writable: false,
  });

  // obj.prop = 17; // TypeError: Cannot assign to read-only property 'prop'
}

example();
```
