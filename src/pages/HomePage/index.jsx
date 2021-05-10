import { useEffect, useState } from "react";
import "./HomePage.scss";
import BetterClock from "./components/BetterClock";
import Clock from "./components/Clock";
import ColorBox from "./components/ColorBox";
import MagicBox from "./components/MagicBox";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function HomePage() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Hello" },
    { id: 2, title: "Hi" },
    { id: 3, title: "Bye bye" },
  ]);

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON, response });
        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    };
    fetchPostList();
  }, []);

  const handleTodoClick = (todo) => {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleTodoFormSubmit = (formValue) => {
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      <h1>Welcome to React Hooks</h1>
      <MagicBox />
      {/* {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide clock</button>
      <BetterClock /> */}
      {/* <PostList posts={postList} /> */}
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onToDoClick={handleTodoClick} /> */}
    </div>
  );
}

export default HomePage;
