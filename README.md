Contact Form – MERN Stack

A full-stack Contact Form application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
Users can submit their contact details and messages, which are stored in MongoDB and viewed using MongoDB Compass.

---

 🚀 Features
- Contact form built with React
- Client-side form validation
- REST API using Express.js
- Data stored securely in MongoDB
- MongoDB Compass used to view and manage data
- Environment variables for security
- Clean and organized project structure

---

🛠️ Tech Stack

### Frontend
- React.js
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- MongoDB Compass

---
 📂 Project Structure
contact-form/
│
├── client/                     # React Frontend
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   └── ContactForm.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   │
│   ├── package.json
│   └── README.md
│
├── server/                     # Express Backend
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── Contact.js
│   │
│   ├── routes/
│   │   └── contactRoutes.js
│   │
│   ├── controllers/
│   │   └── contactController.js
│   │
│   ├── index.js
│   └── package.json
│
├── .gitignore
├── README.md                   # Main project README
└── package-lock.json
---

⚙️ Installation & Setup

1️⃣ Clone the Repository
Bash
•git clone <repository-url>
•cd contact-form
2️⃣ Backend Setup
Bash
•cd server
•npm install
Create a .env file inside the server folder: Env
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the backend server:
Bash
•npm start
Backend runs on:
http://localhost:5000
3️⃣ Frontend Setup
Bash
•cd client
•npm install
•npm start
Frontend runs on:
http://localhost:3000
🧭 MongoDB Compass
MongoDB Compass is used to visually view and manage database records.
Steps:
1. Open MongoDB Compass
2. Click New Connection
3. Paste the MongoDB connection string from .env
4. Connect and view stored contact form data
🔐 Security
• Sensitive data stored in .env
• .env added to .gitignore
• Secrets are never pushed to GitHub
👨‍💻 Author
Adhitya A
B.Tech CSE
Learning MERN Stack Development
📜 License
This project is created for learning and educational purposes.
