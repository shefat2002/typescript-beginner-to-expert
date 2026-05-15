# Typescript Docs

## Instalation

```bash
npm i -g typescript
```

#### Typescript command: `tsc`
- Run Code: `tsc <filename>`
- Run Code (Watching): `tsc -w` # Incremental compilation (Automatically compiled when modify the `.ts` files)
- Project Initialization: `tsc --init`  # Creates a tsconfig.json file


#### File Layout

Uncomment those line in `tsconfig.json`
```json
"rootDir": "./src",  # the source folder where TypeScript are kept
"outDir": "./dist",  # the output folder where the JavaScript file generated
```