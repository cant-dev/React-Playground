import "./styles.css";
import { useState, useCallback } from "react";
import { ChildArea } from "./childArea";

export default function App() {
  console.log("App");
  // Stateの定義
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  // const onClickCountUp = () => {
  //   setCount(count + 1);
  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // 実際にはonClickcloseは状態が変化していないが、state:openがenderにより、再生成されている判定になるので、処理が変わらない限り、同じものを使い回す。
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText}></input>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
