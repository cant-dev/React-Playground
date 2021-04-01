import "./styles.css";
import { useState } from "react";
import { ChildArea } from "./childArea";

export default function App() {
  console.log("App");
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  // const onClickCountUp = () => {
  //   setCount(count + 1);
  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = () => setOpen(false);

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
