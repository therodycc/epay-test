# 🚀 epay-test

Prueba técnica Frontend desarrollada con **Next.js 16**, **React 19**, **TypeScript** y **Tailwind CSS**, siguiendo una arquitectura **Atomic Design** y consumiendo la API pública **JSONPlaceholder**.

<img width="1905" height="998" alt="image" src="https://github.com/user-attachments/assets/832a837e-ae93-42c6-bcbf-ab6c0ca7b556" />
<img width="1917" height="999" alt="image" src="https://github.com/user-attachments/assets/22a93924-ca02-4749-80c1-7fa9a17af744" />



---
### El crud no recibe los cambios porque el API de JSON placeholder no cambia, pero todas las acciones están relizadas correctamente. 

## 📦 Stack Tecnológico

- **Next.js** 16.1.4 (App Router + Turbopack)
- **React** 19
- **TypeScript**
- **Tailwind CSS**
- **Axios**
- **Redux Toolkit**
- **Redux Persist**
- **Lucide React**
- **JSONPlaceholder API**

---

## 📁 Arquitectura del Proyecto

El proyecto sigue el patrón **Atomic Design**:

```text
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── providers/
├── store/
├── types/
├── app/
└── styles/
```

---

## 🔌 API Utilizada

**JSONPlaceholder**

```text
https://jsonplaceholder.typicode.com/users
```

### Operaciones soportadas

- GET – Listar usuarios
- POST – Crear usuario
- PATCH / PUT – Actualizar usuario
- DELETE – Eliminar usuario

> ⚠️ **Nota**  
> JSONPlaceholder simula las operaciones de escritura.  
> Los cambios no se persisten en el backend.

---

## ⚙️ Requisitos

- **Node.js** 18+
- **npm** o **yarn**

---

## ▶️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/therodycc/epay-test.git
cd epay-test
```

---

### 2️⃣ Instalar dependencias & Ejecutar en desarrollo

```bash
yarn; yarn dev; 
```

---

Abrir en el navegador:

```text
http://localhost:3000
```

---

### 4️⃣ Build de producción (opcional)

```bash
yarn build; yarn start; 
```

---

## ✅ Funcionalidades

- Listado dinámico de usuarios
- Crear usuario
- Editar usuario
- Eliminar usuario
- Estados de carga (loading)
- Estado sin datos
- Componentes reutilizables
- Diseño responsive
- Manejo de errores
- Estado global con Redux Toolkit

---

## 🧠 Buenas Prácticas

- TypeScript estricto
- Arquitectura escalable
- Atomic Design
- Separación de responsabilidades
- Providers desacoplados
- UI consistente con Tailwind

---

## 👨‍💻 Autor

**Rody Castro**  
Frontend / Full-Stack Developer
