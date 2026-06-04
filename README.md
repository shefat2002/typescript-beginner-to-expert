# Typescript Docs

## Instalation

```bash
npm i -g typescript
```

#### Typescript command: `tsc`

- Run Code: `tsc <filename>`
- Run Code (Watching): `tsc -w` # Incremental compilation (Automatically compiled when modify the `.ts` files)
- Project Initialization: `tsc --init` # Creates a tsconfig.json file

#### File Layout

Uncomment those line in `tsconfig.json`

```json
"rootDir": "./src",  # the source folder where TypeScript are kept
"outDir": "./dist",  # the output folder where the JavaScript file generated
```

## Module System Setup

Configure the `tsconfig.json` file:

```
"module": "es2015",
"target": "es6",
```

and write in `index.html`:

```
<script type="module" src="dist/script.js"></script>
```

To add module, `export` and `import` keywords are needed.

```
//student.ts

export class Student {
  constructor(
    private id: number,
    private name: string,
    private email: string,
    private address: string,
    private dateOfBirth: string,
  ) {}
  display() {
    console.log(
      `Name: ${this.name}\nStudentId:${this.id}\nEmail:${this.email}\nDate of birth: ${this.dateOfBirth}`,
    );
  }
}
```

```
// script.ts
import { Student } from "./classes/student.js";

const s1 = new Student(101, "Rahim", "rahim@email.com", "Dhaka", "1-1-1999");

s1.display();

```
