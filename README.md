# 📺 YouTubeProject

A full-stack YouTube clone web application that allows users to watch videos, interact with content, and experience a modern video-streaming platform interface with advanced real-time and communication features.

---

# 🚀 Project Overview

**YouTubeProject** is a video streaming web application inspired by YouTube.

It includes video playback, commenting, user interaction, gesture controls, translation support, and VoIP communication features — simulating a real-world modern video platform.

---

# 🛠️ Tech Stack

## Frontend

* React / Next.js
* TypeScript
* JavaScript
* HTML5
* CSS3
* Tailwind CSS

## Backend

* Node.js
* Express.js

## Real-Time & Communication

* Socket.io
* WebRTC (VoIP & Screen Sharing)

## Other Tools

* REST APIs
* Git & GitHub
* Vercel (Frontend Deployment)
* Render / Railway (Backend Deployment)

---

# 📂 Project Structure

```
YoutubeProject/
│
├── server/          # Backend (API, Socket, DB logic)
│
├── yourtube/        # Frontend application
│
├── package.json
├── package-lock.json
└── README.md
```

---

# ✨ Features

## 📹 Video Platform Features

* Video streaming
* Video browsing
* Sidebar navigation
* Responsive UI
* Video duration & controls
* Real-time updates

---

# 💬 Advanced Comment System

### 🌍 Translator Option

* Users can comment in **any language**
* Translate comments into desired language
* Uses translation API (Google Translate / LibreTranslate)

### 👍 Like / 👎 Dislike System

* Users can like or dislike comments

### 🚫 Auto Moderation

* Comments containing **special characters** are blocked
* If a comment receives **2 dislikes**, it is automatically removed

### 📍 User Location

* Displays commenter’s **exact city name** with comment

Example:

```
Snehal Bolke – Mumbai, India
“Great video!”
```

---

# 🎮 Custom Gesture Video Player

A fully customized video player with mobile-style gesture controls.

## Gestures & Actions

| Gesture           | Action            |
| ----------------- | ----------------- |
| Double-tap Right  | ⏩ Forward 10 sec  |
| Double-tap Left   | ⏪ Backward 10 sec |
| Single-tap Center | ⏯ Pause / Play    |
| Triple-tap Center | ⏭ Next Video      |
| Triple-tap Right  | ❌ Close Website   |
| Triple-tap Left   | 💬 Open Comments  |

This creates a **mobile app-like experience** inside the browser.

---

# 📞 VoIP Video Calling Feature

Integrated real-time communication inside the platform.

## Features

* 📹 Video calls with friends
* 🖥 Screen sharing (YouTube website screen)
* 🔊 Audio communication
* 🔴 Record video sessions
* 💾 Save recordings locally

## Technologies Used

* WebRTC
* Socket.io signaling server
* MediaRecorder API

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/snehalbolke13/YoutubeProject.git
cd YoutubeProject
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd yourtube
npm install
```

### Backend

```bash
cd ../server
npm install
```

---

## 3️⃣ Run Project

### ▶️ Start Backend

```bash
cd server
npm start
```

or

```bash
node index.js
```

---

### ▶️ Start Frontend

```bash
cd yourtube
npm run dev
```

---

# 🌐 Deployment

| Service          | Usage       |
| ---------------- | ----------- |
| Vercel           | Frontend    |
| Render / Railway | Backend     |
| GitHub           | Source Code |

Example:

* Frontend → https://youtube-project-fmbb.vercel.app
* Backend → https://youtubeproject-1jc9.onrender.com

⚠️ Note:
If videos don’t load on deployed site, ensure backend server is running.

---

# 📸 Screenshots

```
<img width="1919" height="954" alt="image" src="https://github.com/user-attachments/assets/5c99bb30-9fd7-45df-b796-7d583e9fbb1f" />

<img width="1917" height="971" alt="image" src="https://github.com/user-attachments/assets/af976945-4922-4b70-9382-779091d7fe2c" />

/screenshots/comments.png
/screenshots/videocall.png
```

(Add images in repo)

---

# 📚 Learning Purpose

This project helps in learning:

* Full-stack development
* Video streaming logic
* WebRTC communication
* Gesture handling
* Real-time sockets
* API integration
* Deployment

---

# 🤝 Contributing

Contributions are welcome!

Steps:

1. Fork the repository
2. Create new branch
3. Commit changes
4. Push branch
5. Create Pull Request

---

# 📄 License

Licensed under the **MIT License**

---

# 👩‍💻 Author

**Snehal Bolke**
GitHub: https://github.com/snehalbolke13

---

⭐ If you like this project, don’t forget to star the repo!
