import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

/**
 * state が更新されたコンポーネントは再レンダリングされる
 * props が変更されたコンポーネントは再レンダリングされる
 * 再レンダリングされたコンポーネント配下の子要素は再レンダリングされる
 */

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  // アロー関数で定義した関数は毎処理生成されるため、
  // コンポーネントの props で渡す場合は useCallback で再生成を抑止する。
  const onClickClose = useCallback(() => setOpen(false), []); // 関数のメモ化

  const temp = useMemo(() => 1 + 3, []); // 変数のメモ化

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
