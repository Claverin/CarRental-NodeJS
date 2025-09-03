# 🚗 CarRental-NodeJS

Simple backend for a car rental app – built with Node.js, Express, TypeScript, and MongoDB. Mainly for learning Docker, Docker Compose, NodeJS and TypeScript.

---

## 🔧 Stack

- Node.js + Express
- TypeScript
- MongoDB
- Docker / Docker Compose

---

## 📁 Project Structure

```
├── src/                  # Source code
├── Dockerfile            # App Docker image
├── dockercompose.yml     # Compose file for app + MongoDB
├── .env                  # Env variables (you create this)
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
```

---

## 🚀 How to Run

1. **Create a `.env` file** (if missing):

```env
DATABASE_URL=mongodb://mongo:27017/carrental
PORT=3000
```

2. **Run with Docker:**

```bash
docker compose -f dockercompose.yml up -d --build
```

App will be live at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Run Locally (No Docker)

Make sure MongoDB is running locally:

```bash
npm install
npm run dev
```

---

## 📝 Notes

If it doesn't run, you're probably missing the `.env` file.

---
