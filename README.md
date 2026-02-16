# React CRUD Application

This is a simple React-based CRUD (Create, Read, Update, Delete) application built as part of a technical assessment.

The application manages user data and is designed with future extensibility in mind, allowing new fields to be added with minimal code changes.

---

## Features

- Create, Read, Update, Delete users
- Form validation and required field enforcement
- Configuration-driven form rendering
- Clean and modular React code
- Mock API integration using json-server

---

## User Fields

- First Name (required)
- Last Name (required)
- Email Address (required, valid email)
- Phone Number (required, numeric)

---

## Tech Stack

- React (JavaScript)
- Vite
- react-hook-form
- Yup (validation)
- Axios
- json-server (mock API)

---

## Setup Instructions

###  Install dependencies
```bash
npm install


### Start the mock API
npx json-server --watch db.json --port 3001

### Start the React application
npm run dev
The application will be available at:

http://localhost:5173

### Mock API Details

Since no backend API was provided, json-server is used as a mock API for local development and testing.

Base URL: http://localhost:3001

Users endpoint: http://localhost:3001/users

Data source: db.json

The mock API supports full CRUD operations.

### Extensibility (Adding New Fields)

The form is built using a configuration-driven approach.

Form field configuration is defined in:

src/config/formConfig.js


To add a new field (for example, "Date of Birth"):

Add a new field definition in formConfig.js

{ name: "dob", label: "Date of Birth" }


(Optional) Add validation rules for the new field in UserForm.jsx

No major UI or backend logic changes are required.

### Deployment

The frontend application is deployed to Netlify.

Note:
The CRUD functionality relies on a mock API (json-server) and can be fully tested locally by running the API as described above.