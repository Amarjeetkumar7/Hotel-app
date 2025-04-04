# 🏨 Hotel Booking App 

This is a full-stack hotel booking application built using the MERN stack (MongoDB, Express, React, Node.js). Users can browse rooms, filter by date, and book rooms seamlessly.

## 📁 Folder Structure

Hotel/ ├── client/ # React frontend ├── server/ # Node.js backend with Express └── README.md # Project documentation

yaml
Copy
Edit

---

## 🚀 Features

- 🛏️ View all available rooms
- 📅 Filter rooms based on date range
- 📸 Image gallery for each room
- 🔐 User login/logout
- 💾 MongoDB-based room and booking data
- 📱 Responsive design for mobile/tablet

---

## 🧰 Tech Stack

- **Frontend:** React, React Router, Axios, Ant Design, Moment.js
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas
- **Icons & UI:** React Icons, Bootstrap

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Amarjeetkumar7/Hotel-app.git
cd Hotel-app
2. Setup Backend
bash
Copy
Edit
cd server
npm install
# Create .env and add your MongoDB connection string
npm start
3. Setup Frontend
bash
Copy
Edit
cd ../client
npm install
npm start
🌍 Environment Variables
Inside the server/ folder, create a .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=1300



