import { useEffect, useState } from "react";
import "./App.scss";
import BetterClock from "./components/BetterClock";
import Clock from "./components/Clock";
import ColorBox from "./components/ColorBox";
import Hero from "./components/Hero";
import MagicBox from "./components/MagicBox";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Welcome to React Hooks</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Reduction</button>

      <Hero name={"Ez FE"} />
    </div>
  );
}

export default App;
