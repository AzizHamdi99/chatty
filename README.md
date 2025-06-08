# Chatty

Chatty is a real-time chat application built with the MERN stack.  
Users can create accounts, chat instantly with others, and send text messages, emojis, and pictures seamlessly.

## Features

- User authentication and account creation  
- Real-time messaging powered by WebSocket (e.g., Socket.io)  
- Send text messages, emojis, and images  
- User-friendly and responsive interface  

## Tech Stack

| Layer      | Technology           |
|------------|----------------------|
| Frontend   | React.js             |
| Backend    | Node.js, Express.js  |
| Database   | MongoDB              |
| Real-time  | Socket.io            |
| Authentication | JWT, Bcrypt       |

## Screenshots

_Add screenshots or GIFs of your app here_

## Getting Started

### Prerequisites

- Node.js installed  
- MongoDB running locally or via cloud service  

### Installation


# Clone repo
```bash
git clone https://github.com/AzizHamdi99/chatty.git
cd chatty
```

# Install backend dependencies
```bash
cd backend
npm install
```

# Install frontend dependencies
```bash
cd ../frontend
npm install

```

# Start backend server
```bash
cd backend
npm run dev
```

# Start frontend
```bash
cd ../frontend
npm start
```
Make sure to configure your MongoDB URI and JWT secret in the backend .env file:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Future Improvements
Group chats and direct messaging

File sharing beyond images

Notifications and online status indicators

License
This project is licensed under the MIT License.

Author
👤 Aziz Hamdi
LinkedIn: https://www.linkedin.com/in/aziz-hamdi-837175286/


