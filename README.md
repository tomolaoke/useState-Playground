# React + Vite Playground

This project is a simple React application bootstrapped with [Vite](https://vitejs.dev/) and styled using [Tailwind CSS](https://tailwindcss.com/). It demonstrates basic React concepts, including the use of state with `useState`, component composition, and routing with `react-router-dom`.

## What is `useState`? (Layman Explanation)

`useState` is a special function in React that lets your components remember information and update the screen when that information changes. Think of it as a way for your app to keep track of things like numbers, text, or whether something is visible or hidden.

For example, if you want to count how many times a button is clicked, you can use `useState` to store the number and update it every time the button is pressed. When the value changes, React automatically updates the part of the page that shows the number.

Example from this project:

```jsx
const [myCounter, setMyCounter] = useState(4);
```

- `myCounter` is the current value (starts at 4).
- `setMyCounter` is a function to change the value.

## How to Run This Project

1. **Install Node.js**

   - Download and install Node.js from [nodejs.org](https://nodejs.org/) if you don't have it already.

2. **Install Dependencies**

   - Open a terminal in the project folder and run:
     ```sh
     npm install
     ```

3. **Start the Development Server**

   - In the same terminal, run:
     ```sh
     npm run dev
     ```
   - This will start the app. You should see a local address (like `http://localhost:5173/`) in the terminal. Open it in your browser to view the app.

4. **Other Useful Commands**
   - `npm run build` – Build the app for production (creates a `dist` folder).
   - `npm run preview` – Preview the production build locally.
   - `npm run lint` – Check for code style and errors using ESLint.

## Project Structure

- `src/` – Source code
  - `components/` – Reusable UI components
  - `pages/` – Main pages (Home, About, Contact)
  - `static/` – Static components like the Header
- `public/` – Static assets
- `index.html` – Main HTML file
- `vite.config.js` – Vite configuration
- `tailwind.config.js` – Tailwind CSS configuration

## Features

- Simple counter with increment/decrement
- Show/hide and calculate the square root of the counter
- Navigation between Home, About, and Contact pages
- Styled with Tailwind CSS

---

Feel free to explore and modify the code to learn more about React and Vite!
