# 🚀 Node + TypeScript Template

A modern and clean template to kickstart Node.js projects with TypeScript.

## 📦 Initial Setup

### 1️⃣ Create project

```bash
mkdir node-ts-template && cd node-ts-template
npm init -y
```

### 2️⃣ Install development dependencies

```bash
npm i -D typescript tsx @types/node
```

### 3️⃣ Configure TypeScript

Create a `tsconfig.json` file in the root of the project. You can use the example included in this template.

### 4️⃣ Configure scripts in package.json

Add these scripts to your `package.json` file:

```json
"scripts": {
  "dev": "tsx watch src/app.ts",
  "build": "tsc",
  "start": "node dist/app.js"
}
```

### 5️⃣ Add Eslint + Prettier config

Install these dependencies:

```bash
npm i -D eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-config-prettier eslint-plugin-import
```

### 6️⃣ Configure Eslint and Prettier

Create a `eslint.config.js` file in the root of the project. You can use the example included in this template.

### 7️⃣ Add scripts in package.json

```json
"scripts": {
  "lint": "eslint . --ext .ts",
  "lint:fix": "eslint . --ext .ts --fix",
  "format": "prettier --write ."
}
```

### 8️⃣ Configure VS Code settings

Create a `.vscode/settings.json` file in the root of the project. You can use the example included in this template.

## 🏃 Run the project

### Development mode (watch mode)

```bash
npm run dev
```

### Build project

```bash
npm run build
```

### Production mode

```bash
npm start
```

---

⭐ **Happy coding!**
