import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { TodoType } from "./types/todo";
import { User } from "./types/User";
import "./styles.css";

const user: User = {
  name: "testName"
  // hobbies: ["映画", "ゲーム"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <p>「npx create-react-app my-app --template typescript」</p>
      <p>Typescriptを使ったReactアプリのひな形作成コマンド</p>

      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
