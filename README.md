# ⏱️ Timer App (React)

A clean and modern timer app built using React. This app includes **start**, **pause**, **reset**, and **edit time** functionality, all implemented with smooth state management and a responsive UI inspired by aesthetic timer designs.

---

## ✨ Features

- ⏯️ Start / Pause Timer
- 🔁 Reset Timer
- ✏️ Editable time fields (Hours / Minutes / Seconds)
- 📦 Built with React hooks (`useState`, `useEffect`)
- 💅 Styled with modern CSS & backdrop blur effects
- 🖼️ Background image with dimmed overlay for focus
- ⌚ Dynamic document title to show live countdown

---

## 📸 Screenshot

![Timer App Screenshot](..src/assets/screenshot-1.png)  
> *Inspired by aesthetic timer designs for focused study sessions*

---

## 🚀 Live Demo

🔗 [Click here to view the hosted timer app](https://timer-app-react-devadarshh.netlify.app/)

---

## 🧠 How It Works

### 1. State Management

Uses `useState` for:

- `remainingTime`: total time in seconds  
- `isRunning`: whether timer is active  
- `editState`: used inside modal to update hour/minute/second

---

### 2. Countdown Logic

- `useEffect` runs every second when `isRunning` is true.
- On each tick, `remainingTime` is decremented.
- When time hits 0, the timer stops automatically.

---

### 3. Editable Time

- Click "Edit" to open a modal with input fields.
- Input is validated (e.g. 0–59 for minutes/seconds).
- Updates the timer on save.

---

### 4. Controls

| Button | Function |
|--------|----------|
| ▶ Start | Begins countdown |
| ⏸ Pause | Pauses countdown |
| 🔄 Reset | Sets timer to 00:00:00 |
| 📝 Edit | Opens modal to update time |

---

## 🛠️ Installation & Running Locally

```bash
git clone https://github.com/devadarshh/timer-app-react.git
cd timer-app-react
npm install
npm run dev
