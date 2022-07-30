import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";

// 取得するデータ型を予め宣言しておく
// c#の構造体のような仕組み
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
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

      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userId} />
      ))}
    </div>
  );
}
