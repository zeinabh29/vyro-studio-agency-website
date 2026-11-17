# 04 - Local Development

## 1. Overview
The Vyro Studio application is developed and tested locally before production deployment.

## 2. Prerequisites
- Node.js
- npm
- Visual Studio Code
- Git

## 3. Install Dependencies
```bash
npm install
```

## 4. Start Development Server
```bash
npm run dev
```

## 5. Development Configuration
- Development server: Vite
- Host: 0.0.0.0
- Port: 5173
- Local URL: http://localhost:5173/

## 6. Production Build
```bash
npm run build
```
The generated production files are stored in the dist/ directory.

## 7. Conclusion
The local development environment prepares the application for Docker containerization and cloud deployment.
