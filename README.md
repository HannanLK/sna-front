# Sentiment Analysis Frontend

This is the frontend for the **Sentiment Analysis Tool**. It is built with **React** and **Vite** for fast development, and styled with **Tailwind CSS**. The frontend allows users to input product reviews or social media post links and displays sentiment analysis results in an interactive interface.

## 🚀 Features

- **Product Review Input**: Allow users to input product reviews manually or upload CSV/Excel files.
- **Social Media Post Analysis**: Allow users to input social media post links (e.g., Twitter, Reddit) and analyze the comments.
- **Visualization**: Display sentiment distribution (positive/neutral/negative) in charts.
- **Downloadable Reports**: Provide users with the option to download analysis results in PDF format.

## 🛠️ Setup and Installation

### Prerequisites

- Node.js and npm installed. You can download them from [here](https://nodejs.org/).

### 1. Clone the Repository
```bash
git clone https://github.com/hannanlk/sna-front.git
cd sna-front
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start Development Server
```bash
npm run dev
```
Your app will be running at http://localhost:3000
### 4. Tailwind CSS Setup
Make sure Tailwind CSS is installed and configured by the instructions in the [Tailwind Docs](https://tailwindcss.com/docs/installation/using-vite). If not set up, you can run:
```bash
npm install tailwindcss @tailwindcss/vite
npx tailwindcss init
```
