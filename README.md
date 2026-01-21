# React Mini-Game: 10x10 Grid Challenge

An interactive mini-game built with **React**, **TypeScript**, **Material-UI**, and **Zustand**.  
Test your reflexes by clicking the highlighted squares before time runs out!

---

## 🎮 Game Description

- A **10x10 grid** of blue squares.
- Click the **Start** button to begin.
- A random square turns **yellow** — you have `N` milliseconds to click it.
- Scoring:
  - **Green** square = Player clicked in time → +1 point
  - **Red** square = Player missed → Computer +1 point
- First to **10 points wins**.
- A custom modal shows the game result.

---

## ⚙️ Features

- Fully interactive **grid-based gameplay**
- **Dynamic scoring**: Player vs Computer
- **Custom modal** for game results (no browser alerts)
- **Responsive design** for desktop and mobile
- Input field for **time limit (ms)** with validation (500–5000ms)
- **Start button disabled** when input is invalid
- State management with **Zustand**
- UI built with **Material-UI v6**
- TypeScript for type safety and maintainability

---

## 🛠️ Tech Stack

- React 18 + TypeScript
- Material-UI (MUI v6)
- Zustand (state management)
- HTML5 / CSS3
- Vite (optional) or Create React App

---

## 🚀 Installation

# 1. Clone the repository:

```
bash
git clone https://github.com/YOUR_USERNAME/react-mini-game.git
```

# 2. Install dependencies:

cd react-mini-game
npm install

or

yarn

# 3. Run the development server:

npm run dev

or

yarn dev

# 4. Open http://localhost:5173
   in your browser.

## Project Structure

```
src/
├── components/
│ ├── GameGrid.tsx # 10x10 grid component
│ ├── ControlPanel.tsx # Start button & time input
│ ├── ScoreBoard.tsx # Board with scores
│ └── ResultModal.tsx # Custom modal for game results
├── store/
│ └── gameStore.ts # Zustand store with game logic
├── types/
│ └── game.ts # Type definitions for cells and scores
├── utils/
│ └── randomCell.ts # Helper for random cell selection
└── App.tsx # Main application
```

## ✅ Usage

Enter a time limit (ms) between 500 and 5000.

Click Start.

Click the yellow square before time runs out.

The first to 10 points wins.

Modal shows who won the game.

## 🎯 Notes

The game prevents invalid actions: clicking inactive cells or starting while already running.

Input validation ensures the time limit stays within range, and the Start button is disabled otherwise.

Game logic uses guards and timeouts to prevent race conditions or inconsistent states.
