# MERN AI Chat Application

## Overview
This project is a **MERN (MongoDB, Express, React, Node.js)** based AI-powered chat application. It enables real-time chat functionalities with AI-driven responses using OpenAI's API (or a custom AI model).

## Features
- **Real-time chat** with WebSockets (Socket.io)
- **AI-generated responses** using OpenAI/GPT models
- **User authentication** (JWT-based login & signup)
- **MongoDB database** for storing chat history
- **Responsive UI** built with React and Tailwind CSS
- **Secure backend** with Express and Node.js
- **Scalability & Performance** optimized for smooth user experience

## Tech Stack
### Frontend:
- React.js
- Tailwind CSS
- Socket.io-client
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB & Mongoose
- Socket.io
- OpenAI API (or custom AI model)

## Installation
### Prerequisites:
- **Node.js** (v16+)
- **MongoDB** (local or cloud, e.g., MongoDB Atlas)
- **OpenAI API Key** (if using OpenAI models)

### Steps to Run:
1. **Clone the repository:**
   ```sh
   git clone https://github.com/raziquehasan/SOEN.git
   cd mern-ai-chat
   ```
2. **Install dependencies for backend & frontend:**
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the **backend** directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   OPENAI_API_KEY=your_openai_api_key
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. **Start the backend server:**
   ```sh
   cd backend
   npm run dev
   ```
5. **Start the frontend:**
   ```sh
   cd frontend
   npm start
   ```
6. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints
### Authentication
- **POST** `/api/auth/signup` - Register a new user
- **POST** `/api/auth/login` - Login user & get JWT token

### Chat
- **POST** `/api/chat/send` - Send a message & get AI response
- **GET** `/api/chat/history` - Fetch chat history

## Future Enhancements
- **Support for multiple AI models** (Claude, Gemini, etc.)
- **Voice-to-text & text-to-speech support**
- **Multi-user chatrooms**
- **File & image sharing**
- **End-to-end encryption for chat security**
- **Dark mode & customizable themes**
- **Progressive Web App (PWA) support**

## Contributing
Feel free to fork this repository and submit pull requests. Contributions are always welcome!

## License
This project is licensed under the **MIT License**.

