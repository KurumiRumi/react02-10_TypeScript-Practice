import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <p>「npx create-react-app my-app --template typescript」</p>
      <p>Typescriptを使ったReactアプリのひな形作成コマンド</p>

      <button onClick={onClickFetchData}>データ取得</button>
    </div>
  );
}
