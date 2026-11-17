# 03 – Project Architecture

## 1. Architecture Overview

Vyro Studio follows a modern frontend application architecture based on React and Vite.

The application is structured to support reusable components, client-side navigation, interactive user interfaces, and maintainable frontend development.

## 2. Application Architecture

The main application workflow consists of:

1. User accesses the website through a web browser.
2. The browser loads the application entry point.
3. React renders the application interface.
4. React Router DOM handles client-side navigation.
5. Tailwind CSS provides styling and responsive layouts.
6. Framer Motion and GSAP provide animation and interactive effects.

## 3. Main Technologies and Responsibilities

| Component | Responsibility |
|---|---|
| React | UI rendering and component management |
| TypeScript | Type safety |
| Vite | Development and production build tooling |
| React Router DOM | Client-side routing |
| Tailwind CSS | Styling |
| Framer Motion | UI animations |
| GSAP | Advanced animations |
| Lucide React | Icons |

## 4. Build Architecture

The production build process uses Vite.

Source code and application assets are processed and optimized into static production files.

The generated files are stored in the dist/ directory.

## 5. Planned Production Deployment Architecture

The planned deployment workflow is:

Browser
   |
   v
AWS EC2
   |
   v
Docker Container
   |
   v
Nginx Web Server
   |
   v
Production Files (dist/)

The Docker and AWS deployment architecture will be verified and updated after implementation.

## 6. Conclusion

The application architecture provides a foundation for maintainable frontend development and future containerized cloud deployment.
