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

### 9️⃣ Add Jest

Install these dependencies:

```bash
npm i -D jest ts-jest @jest/globals @types/jest
```

### 🔟 Configure VS Code settings

Create a `jest.config.js` file in the root of the project. You can use the example included in this template.

### ➡️ Dockerizing app (useful commands at the end)

Build docker image

```bash
docker build -t node-ts-template:loki .
```

```bash
docker container run node-ts-template:loki
```

#

🧪 Added a small demo app with `node-cron` for demo purposes.

## 🏃 Run the project

### Development mode (watch mode)

```bash
npm run dev
```

### Build project

```bash
npm run build
```

### Production mode (after build)

```bash
npm start
```

---

⭐ **Happy coding!**

### Docker commands 👀

```bash
docker pull `image-name:tag`
docker container run -d `image-name:tag`
docker container ls -a
docker exec -it `container-id` /bin/sh
```

#

IMAGE=username/image
TAG=1.0.0 # (or latest)

### Build and push (one arch)

```bash
docker build -t $IMAGE:$TAG .
docker push $IMAGE:$TAG

# Optional, add latest tag
docker tag $IMAGE:$TAG $IMAGE:latest
docker push $IMAGE:latest
```

### Build and push (multi arch)

```bash
docker buildx create --name multiarch --use || docker buildx use multiarch
docker buildx inspect --bootstrap

docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t $IMAGE:$TAG \
  -t $IMAGE:latest \
  --push \
  .
```
