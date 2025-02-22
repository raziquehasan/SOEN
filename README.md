# SOEN
MERN AI Chat Application

Overview

This project is a MERN (MongoDB, Express, React, Node.js) based AI-powered chat application. It allows real-time chat functionalities with AI-driven responses using OpenAI's API (or a custom AI model).

Features

Real-time chat with WebSockets (Socket.io)

AI-generated responses using OpenAI/GPT models

User authentication (JWT-based login & signup)

MongoDB database for storing chat history

Responsive UI built with React and Tailwind CSS

Secure backend with Express and Node.js

Tech Stack

Frontend:

React.js

Tailwind CSS

Socket.io-client

Axios

Backend:

Node.js

Express.js

MongoDB & Mongoose

Socket.io

OpenAI API (or custom AI model)

Installation

Prerequisites:

Node.js (v16+)

MongoDB (local or cloud, e.g., MongoDB Atlas)

OpenAI API Key (if using OpenAI models)

Steps to Run:

Clone the repository:

git clone https://github.com/yourusername/mern-ai-chat.git
cd mern-ai-chat

Install dependencies for backend & frontend:

cd backend
npm install
cd ../frontend
npm install

Set up environment variables:
Create a .env file in the backend directory:

MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_secret_key
PORT=5000

Start the backend server:

cd backend
npm run dev

Start the frontend:

cd frontend
npm start

Open the application:
Navigate to http://localhost:3000 in your browser.

API Endpoints

Authentication

POST /api/auth/signup - Register a new user

POST /api/auth/login - Login user & get JWT token

Chat

POST /api/chat/send - Send a message & get AI response

GET /api/chat/history - Fetch chat history

Future Enhancements

Support for multiple AI models (Claude, Gemini, etc.)

Voice-to-text & text-to-speech support

Multi-user chatrooms

File & image sharing
