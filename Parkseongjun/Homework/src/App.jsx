import { useState } from "react";
import BombMessage from "./components/BombMessage";
import "./App.css";

function App() {
  const [showBombMessage, setShowBombMessage] = useState(false);
  const [bombkey, setBombkey] = useState(0);

  // 키값을 바꿔서 컴포넌트 리로드
  // 과제 조건 4번 충족
  const keyPlus = () => {

    setShowBombMessage(false);

    setTimeout(() => {
      setBombkey((prev) => prev + 1);
      setShowBombMessage(true);
    },0);
  }

  return (
    <div className="container">
      {showBombMessage && <BombMessage key={bombkey} />}
      <button onClick={() => keyPlus(true)}>모달 보기</button>
    </div>
  )
}

export default App;

