# TypeScript Roadmap: Beginner → Expert

> A structured path to master TypeScript. Focus on understanding *why* and *when*, not just syntax.

---

## Level 1: Foundations

### Prerequisites
- **JavaScript fundamentals (ES6+)**: arrow functions, destructuring, spread/rest, modules, promises, async/await
- **npm/node basics**: package.json, installing dependencies, running scripts

---

### 1. Type Annotations vs Type Inference

**What**: Explicitly telling TypeScript what type something is vs letting it figure it out.

**Why**: Type inference is cleaner. Use annotations for function returns and public APIs. Let inference handle the rest.

**Learn**:
- Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- When to annotate: function parameters, return types, public interfaces
- When to rely on inference: local variables, obvious contexts

**Practice**: Write same function with and without annotations. Compare readability.

---

### 2. Arrays, Tuples, and Readonly

**What**: Collections with type safety. Tuples have fixed length with known types at each position.

**Why**: Catch index errors, prevent wrong data shapes, document intent.

**Learn**:
- `number[]` vs `Array<number>` — prefer `number[]` for readability
- Tuples: `[string, number]` — fixed position types
- Readonly: `readonly string[]` — prevent mutation
- `as const` — creates readonly literal types

**Common pitfall**: Using `any[]` defeats purpose. Always specify element type.

---

### 3. Functions: Parameters, Returns, and Void

**What**: Typing what goes in and what comes out.

**Why**: Functions are where bugs hide. Types act as contracts between caller and implementation.

**Learn**:
- Parameter types: required
- Return types: optional but recommended for public APIs
- `void`: functions that return nothing
- `never`: functions that never return (throw always, infinite loop)

**Best practice**: Annotate return types on exported functions. Let inference handle internal helpers.

---

### 4. Objects and Interfaces

**What**: Describing the shape of data.

**Why**: Most data in JS is objects. Interfaces document expected structure.

**Learn**:
- Interface declaration syntax
- Optional properties: `name?: string`
- Readonly properties: `readonly id: number`
- Excess property checks — why they matter
- Index signatures: `[key: string]: unknown`

**Interface vs Type**: Use interface for object shapes that can be extended. Use type for unions, intersections, aliases.

---

### 5. Union and Literal Types

**What**: Values that can be one of several types.

**Why**: Real data isn't always one type. Unions model "either/or". Literals model specific values.

**Learn**:
- Union: `string | number`
- Literal: `"click" | "submit" | "cancel"`
- String literal unions = enums alternative
- Narrowing: how TypeScript refines unions in conditionals

**Pattern**: Use literal unions for state, status, mode — anything with discrete known values.

---

### 6. Type Guards and Narrowing

**What**: Code that helps TypeScript understand types in specific scopes.

**Why**: TypeScript can't know everything. You teach it runtime checks.

**Learn**:
- `typeof`: for primitives
- `instanceof`: for classes
- `in`: for object properties
- Equality checks: `value === null`
- Type predicates: `value is string`

**Key insight**: Narrowing is how you safely use unions.

---

### 7. Any, Unknown, and Never

**What**: Escape hatches and bottom types.

**Why**: Sometimes you need flexibility. `any` is unsafe flexibility. `unknown` is safe flexibility.

**Learn**:
- `any`: disables type checking — avoid unless absolutely necessary
- `unknown`: type-safe `any` — must narrow before use
- `never`: impossible type — useful for exhaustiveness checks

**Rule**: Use `unknown` instead of `any`. Only accept `any` from badly-typed libraries.

---

### 8. Structural Typing vs Duck Typing

**What**: TypeScript checks shapes, not names. If it quacks like a duck, it's a duck.

**Why**: Enables composition and mocking. Don't need explicit inheritance.

**Learn**:
- Excess Property Checks: only on direct object literals
- Assignability: when can A be assigned to B?
- How interfaces don't have runtime representation

**Mental model**: Types are sets of values. A value belongs to a type if it has all required properties.

---

## Level 2: Intermediate

### 9. Type Aliases vs Interfaces

**What**: Two ways to name types.

**Why**:
- Interfaces: extensible, better for object shapes, declaration merging
- Type aliases: unions, intersections, utility types, non-object shapes

**Learn**:
- When to use each
- Interface merging: same name combines
- Type aliases cannot be changed after creation

**Heuristic**: Interface for shapes you might extend. Type for everything else.

---

### 10. Enums

**What**: Named constants with auto-assigned values.

**Why**: Self-documenting code, prevent typos in string literals.

**Learn**:
- Numeric enums: auto-incrementing
- String enums: explicit values
- Const enums: compiled away
- Union of literals alternative

**Trade-off**: Enums have runtime cost. String literal unions don't. Consider if runtime value matters.

---

### 11. Type Assertions

**What**: Telling TypeScript "I know better than you."

**Why**: Sometimes TypeScript can't infer correctly. Sometimes you're working with loosely-typed libraries.

**Learn**:
- `as` syntax: preferred
- `<>` syntax: JSX conflict
- Double assertion: `value as unknown as OtherType`
- Non-null assertion: `value!` — use sparingly

**Danger zone**: Assertions bypass type checking. Use only when you're certain.

---

### 12. Generics: The Basics

**What**: Types that take other types as parameters.

**Why**: Write code that works with multiple types while maintaining type safety.

**Learn**:
- Generic functions: `function identity<T>(arg: T): T`
- Type inference: TypeScript often figures out `T`
- Generic interfaces: `interface Box<T> { value: T }`
- Constraints: `<T extends Lengthwise>`

**Analogy**: Generics are functions at type level. They take types in, return types out.

---

### 13. Classes and Access Modifiers

**What**: ES6 classes with TypeScript type features.

**Why**: Sometimes you need OO patterns. TypeScript makes classes safer.

**Learn**:
- Property modifiers: `public`, `private`, `protected`
- `readonly` properties
- Parameter properties: constructor shorthand
- Abstract classes and methods

**Note**: Many TS codebases prefer functions and composition over classes. Use classes when appropriate, not by default.

---

### 14. Utility Types: Built-in Tools

**What**: Standard type transformations built into TypeScript.

**Why**: Common patterns. Don't reinvent.

**Learn**:
- `Partial<T>`: make all props optional
- `Required<T>`: make all props required
- `Readonly<T>`: make all props readonly
- `Pick<T, K>`: select specific keys
- `Omit<T, K>`: remove specific keys
- `Record<K, T>`: create object type from keys

**Practice**: Try implementing each yourself. You'll understand how they work.

---

### 15. Function Typing Patterns

**What**: Different ways to type functions.

**Why**: Functions are first-class. Need to type them in all contexts.

**Learn**:
- Function type expressions: `(a: string, b: number) => boolean`
- Call signatures: overload behavior in objects
- Function overloads: different behaviors for different inputs
- This typing: explicit `this` parameter

---

### 16. Module System

**What**: How code is organized and shared.

**Why**: No more global namespace. Explicit dependencies.

**Learn**:
- ES modules: `import`/`export`
- Type-only imports: `import type { User }`
- Barrel files: re-exports from index
- Module resolution: how TS finds files

**Best practice**: Use ES modules. Type-only imports for things only used in type position.

---

## Level 3: Advanced

### 17. Conditional Types

**What**: Types that choose based on conditions.

**Why**: Transform types based on their structure.

**Learn**:
- Syntax: `T extends U ? X : Y`
- Distributive conditional types: distribute over unions
- `infer`: extract types from within other types
- Predefined: `Awaited<T>`, `ReturnType<T>`, `Parameters<T>`

**Breakthrough moment**: Realize conditional types are pattern matching at type level.

---

### 18. Mapped Types

**What**: Transform every property in an object type.

**Why**: Modify existing types consistently.

**Learn**:
- Syntax: `[P in keyof T]: T[P]`
- Adding modifiers: `readonly`, `?`
- Removing modifiers: `-readonly`, `-?`
- Key remapping: `as`

**Use cases**: `Partial<T>` and `Readonly<T>` are mapped types. Create your own transformations.

---

### 19. Template Literal Types

**What**: Types built from string operations.

**Why**: Type strings that follow patterns. Event handlers, CSS classes, API paths.

**Learn**:
- Basic template literals: `` `on${Capitalize<T>}` ``
- String manipulation: `Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize`
- Inference from templates
- Building DSL types

**Real-world use**: Type-safe event emitter, styled components, routing.

---

### 20. Discriminated Unions

**What**: Unions where each member has a common property with unique literal value.

**Why**: Exhaustive handling without `default` cases. Type-safe state machines.

**Learn**:
- Discriminant property: `kind`, `type`, `status`
- Exhaustiveness checking with `never`
- Narrowing works automatically

**Pattern**: The "tagged union" — favorite FP pattern in TypeScript.

---

### 21. Type Guards: Custom Predicates

**What**: Functions that tell TypeScript a type is more specific than it knows.

**Why**: Runtime checks that inform the type system.

**Learn**:
- Type predicate syntax: `value is StringType`
- Assertion functions: `asserts value is Type`
- `is` keyword for guards

**Example**: `Array.isArray()` is built-in guard. Write your own for domain types.

---

### 22. Branded Types

**What**: Types that are nominally distinct despite same structure.

**Why**: Prevent mixing values that shouldn't mix. USD vs EUR amounts.

**Learn**:
- Brand pattern: `type UserId = string & { readonly __brand: unique symbol }`
- Validation functions that return branded types
- Why opaque types matter

**Use case**: IDs from different services, currencies, validated inputs.

---

### 23. Recursive Types

**What**: Types that reference themselves.

**Why**: Model nested structures: JSON, trees, linked lists.

**Learn**:
- Basic recursion: `type Json = string | number | boolean | Json[] | { [key: string]: Json }`
- Tail recursion optimization considerations
- Depth limits in TS

**Caution**: TypeScript has recursion depth limits. Very deep types may fail.

---

### 24. Index Access Types

**What**: Get type of a property using bracket notation.

**Why**: Don't repeat yourself. Extract types from existing types.

**Learn**:
- `type Name = Person['name']`
- Nested access: `type AddressCity = Person['address']['city']`
- Array element: `type Items = Array<string>[number]`

**Pattern**: Use index access to avoid duplicating type definitions.

---

## Level 4: Expert

### 25. Advanced Conditional Patterns

**What**: Complex type logic using conditionals.

**Why**: Solve real-world type transformation problems.

**Learn**:
- Distributed vs non-distributed conditionals
- Tuple to union: `T[number]`
- Union to tuple: harder, requires recursive tricks
- Type-level string manipulation

**Expert skill**: Read complex utility type definitions and understand what they do.

---

### 26. Key Remapping in Mapped Types

**What**: Transform both keys and values in mapped types.

**Why**: Remove keys, rename keys, filter by value type.

**Learn**:
- `as` clause in mapped types
- Conditional key remapping
- `OmitByType`, `PickByType` patterns

**Use case**: Deep `Omit`, deep `Pick`, filtering object types.

---

### 27. Type Manipulation: Deep Transformations

**What**: Recursively transform nested object types.

**Why**: Handle deeply nested configuration, partial updates, readonly wrapping.

**Learn**:
- `DeepReadonly<T>`: make everything readonly recursively
- `DeepPartial<T>`: make everything optional recursively
- `DeepRequired<T>`: make everything required recursively
- Handling arrays and tuples in deep types

---

### 28. Variance: Covariant, Contravariant, Invariant

**What**: How subtypes relate in complex types.

**Why**: Understand why some type assignments work and others don't.

**Learn**:
- Functions are contravariant in parameters, covariant in returns
- Arrays are covariant (bivariant in older TS)
- Why `strictFunctionTypes` matters

**Why it matters**: Explains counterintuitive type errors. Helps design better APIs.

---

### 29. Declaration Merging

**What**: Multiple declarations for same name combine.

**Why**: Extend types from libraries you don't control.

**Learn**:
- Interface merging: same name = combined
- Namespace merging
- Module augmentation: `declare module "library"`
- `global` augmentation

**Use case**: Add properties to `Window`, augment `Express.Request`, extend library types.

---

### 30. Decorators

**What**: Functions that modify classes, methods, properties.

**Why**: Metaprogramming. Cross-cutting concerns: logging, validation, memoization.

**Learn**:
- Class decorators
- Method decorators
- Property decorators
- Parameter decorators
- Decorator composition order

**Status**: Stage 3 TC39 proposal. TS has legacy implementation. New proposal coming.

---

### 31. Module Resolution Strategies

**What**: How TypeScript finds files when you import.

**Why**: Understanding prevents module resolution errors.

**Learn**:
- `node` vs `node16` / `nodenext`
- `paths` mapping in tsconfig
- `moduleResolution` option
- Package.json `exports` field
- `package.json` `types` field

**Debug**: Use `tsc --traceResolution` to see how modules are found.

---

### 32. tsconfig: Every Option Matters

**What**: TypeScript configuration options.

**Why**: Strict settings catch bugs early. Loose settings let bugs through.

**Must understand**:
- `strict`: enable all strict options
- `noUncheckedIndexedAccess`: safer array/object access
- `exactOptionalPropertyTypes`: `undefined` not same as missing
- `noImplicitOverride`: explicit `override` keyword
- `noPropertyAccessFromIndexSignature`: force dot notation

**Recommendation**: Start with `strict: true`. Add more strictness over time.

---

### 33. Utility Types: Advanced Built-ins

**What**: More complex built-in utilities.

**Why**: Use proven implementations. Don't reinvent.

**Learn**:
- `Extract<T, U>`: extract from T assignable to U
- `Exclude<T, U>`: remove from T assignable to U
- `NonNullable<T>`: remove null and undefined
- `Infer` utility types: `ReturnType`, `Parameters`, `InstanceType`

---

### 34. Type-Level Programming

**What**: Using the type system as a programming language.

**Why**: Catch errors at compile time, encode invariants, enable IDE autocomplete.

**Learn**:
- Type-level arithmetic (using tuple lengths)
- Type-level strings manipulation
- Turing completeness at type level

**Philosophy**: Push complexity into types. Runtime becomes simple and correct.

---

## Level 5: Architectural Mastery

### 35. Domain-Driven Design with Types

**What**: Encode domain rules directly in types.

**Why**: Make invalid states unrepresentable.

**Learn**:
- Value objects with branded types
- Entity types with ID branding
- Aggregate boundaries
- Domain events as discriminated unions

**Pattern**: Type-safe currency, validated emails, non-empty strings.

---

### 36. State Machines with Types

**What**: Model state as typed transitions.

**Why**: Prevent impossible state combinations. No "loading but also error".

**Learn**:
- State as discriminated union
- Events as typed objects
- Transition functions with exhaustive checks
- XState-style type safety

**Benefit**: Can't forget to handle a state. Compiler enforces exhaustiveness.

---

### 37. Type-Safe API Clients

**What**: Generated or typed API interfaces.

**Why**: No mismatch between frontend and backend types.

**Learn**:
- OpenAPI/Swagger to TypeScript generation
- Generic API wrappers
- Typed routes and query params
- Response typing with `zod` or similar

**Tools**: `openapi-typescript`, `orval`, `zod`, `tRPC`.

---

### 38. Monorepo Type Sharing

**What**: Share types across packages without duplication.

**Why**: Single source of truth. Changes propagate automatically.

**Learn**:
- Workspace configuration (npm, pnpm, yarn)
- `packages/types` pattern
- `package.json` exports field
- Path mapping for clean imports

**Tools**: Turborepo, Nx, pnpm workspaces.

---

### 39. Library Authoring

**What**: Publish packages with excellent TypeScript support.

**Why**: Good types = good developer experience.

**Learn**:
- `declaration: true` in tsconfig
- `declarationMap` for go-to-definition
- `exports` field with types condition
- `typesVersions` for version-specific types
- DefinitelyTyped for external types

**Best practice**: Ship types with your package. Don't make users `npm install @types/your-package`.

---

### 40. Performance: Type Checking Speed

**What**: Keep type checking fast as codebase grows.

**Why**: Slow type checks hurt productivity.

**Learn**:
- Project references: split codebase
- Incremental compilation: `tsbuildinfo`
- `skipLibCheck`: skip .d.ts files
- Exclude tests from production check
- `tsc --watch` for continuous checking

**Rule of thumb**: If type checking takes > 30 seconds, investigate project references.

---

### 41. Testing Types

**What**: Verify type behavior without runtime code.

**Why**: Types are part of your API. Test them.

**Learn**:
- Type assertions in tests: `expectType<T>(value)`
- `dtslint`: dedicated type testing
- `tsd`: simplified type testing
- Testing type errors: negative test cases

**Tools**: `tsd`, `ts-expect-error`, `@type-challenges/tsd`.

---

### 42. Migration Strategies

**What**: Gradually add TypeScript to JavaScript codebases.

**Why**: Big bang rewrite is risky and expensive.

**Learn**:
- `allowJs`: mix JS and TS
- `checkJs`: type-check JS files
- Incremental renaming: .js → .ts
- `// @ts-check` in JSDoc
- `// @ts-ignore` and `// @ts-expect-error` for temporary issues

**Strategy**: Start with new files in TS. Gradually migrate frequently-changed files.

---

### 43. Generic Component Patterns

**What**: Reusable components in React/Vue/Svelte with proper generics.

**Why**: Don't repeat component variations for different data types.

**Learn**:
- Generic function components
- Generic props interfaces
- Type inference from props
- Constraining generics in components

**Example**: Generic table component that types rows based on data prop.

---

### 44. Architectural Decision Records

**What**: Document why you made type-level decisions.

**Why**: Types are architecture. Decisions need context.

**Learn**:
- When to use strict vs loose types
- Branded types vs runtime validation
- When to use `any` (and document why)
- Library integration type patterns

**Philosophy**: Types are communication. Future you (and teammates) need context.

---

## Practice Projects

Build these to solidify knowledge:

| Project | Focus |
|---------|-------|
| **CLI Tool** | Node.js, proper CLI types, config files |
| **React App** | Component typing, hooks, context, generic components |
| **API Client** | Generic fetch wrapper, typed responses, error handling |
| **State Manager** | Redux/Zustand with typed reducers, selectors, middleware |
| **Type Library** | Published npm package with declaration files |
| **Monorepo** | Shared types package, workspace config, path mapping |

---

## Learning Resources

### Official
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) — authoritative source
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/) — community favorite
- [Effective TypeScript](https://effectivetypescript.com/) — book by Dan Vanderkam

### Practice
- [Type Challenges](https://github.com/type-challenges/type-challenges) — gamified type puzzles
- [Total TypeScript](https://totaltypescript.com/) — Matt Pocock's workshops
- [Exercism TypeScript Track](https://exercism.org/tracks/typescript) — mentored practice

### Reference
- [TypeScript Compiler API](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API) — build tools
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) — community types
- [tsconfig benchmark](https://github.com/microsoft/TypeScript/wiki/Performance) — optimization

---

## Milestones

✅ **Level 1 Complete** — You can read and write basic TypeScript code.
✅ **Level 2 Complete** — You understand generics and utility types.
✅ **Level 3 Complete** — You can design complex type systems.
✅ **Level 4 Complete** — You understand how TypeScript works under the hood.
✅ **Level 5 Complete** — You can architect large-scale type-safe codebases.
