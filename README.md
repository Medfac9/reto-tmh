# Proyecto de Tareas y Perfil de Usuario con Next.js

Este proyecto es una aplicación de ejemplo que incluye funcionalidades de una lista de tareas, una página de perfil de usuario, y una página de productos con filtros, implementadas con **Next.js** y **TypeScript**.

## Requisitos Previos

Para ejecutar este proyecto, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn** (dependiendo de tu gestor de paquetes preferido)

## Instalación

1. **Clona el repositorio**:

   Si aún no has clonado el repositorio, puedes hacerlo utilizando Git:

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio

2. **Instala las dependencias**:

   Utiliza npm o yarn para instalar las dependencias del proyecto:

   ```bash
   npm install
   ```

## Ejecución
Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```
Esto iniciará un servidor de desarrollo y podrás acceder a la aplicación en `http://localhost:3000`.

## Estructura del Proyecto
ToDo List -> `http://localhost:3000`

Perfil de Usuario -> `http://localhost:3000/profile`

Página de Productos -> `http://localhost:3000/products`

## Tests
Para ejecutar los tests, utiliza el siguiente comando:

```bash
npm run test
```
Esto ejecutará los tests definidos en el proyecto.

Para ejecutar un test determinado, puedes usar el siguiente comando:

```bash
npm run test src/tests/NombreDelTest.test.ts
```