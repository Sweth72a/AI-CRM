# AI CRM HCP Module

## Project Overview

The AI CRM HCP Module is a full-stack web application built for managing Healthcare Professional (HCP) interactions. It enables users to record doctor visits, generate AI-powered visit summaries, search interaction history, edit records, and track follow-up reminders.

---

## Features

- Create new HCP interactions
- View interaction history
- Edit existing interactions
- Search HCP by name
- AI-generated visit summary using Groq + LangGraph
- Follow-up reminder indicator
- Responsive Material UI interface
- Redux Toolkit state management
- PostgreSQL database integration
- FastAPI backend APIs

---

## Tech Stack

### Frontend
- React.js
- Material UI
- Redux Toolkit
- Axios

### Backend
- FastAPI
- SQLAlchemy
- PostgreSQL
- LangGraph
- LangChain
- Groq API

---

## Project Structure

```
AI-CRM/
│
├── backend/
│   ├── app/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## Installation

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

Swagger API

```
http://127.0.0.1:8000/docs
```

---

### Frontend

```bash
cd frontend

npm install

npm start
```

Frontend runs on

```
http://localhost:3000
```

---

## AI Features

- Visit Summary Generation
- CRM JSON Generation
- LangGraph Workflow
- Groq LLM Integration

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /interactions | Create interaction |
| GET | /interactions | Get all interactions |
| PUT | /interactions/{id} | Update interaction |
| POST | /chat | Generate AI response |

---

## Screenshots

Add screenshots here.

Example:

- Dashboard
- Interaction Form
- AI Chat
- Interaction History

---

## Author

Swetha