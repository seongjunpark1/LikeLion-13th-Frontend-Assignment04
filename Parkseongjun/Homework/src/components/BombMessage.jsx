import { useEffect, useState } from "react";
import "./BombMessage.css"

// 과제 조건 1번 충족
function BombTimer() {
    const [second, setSecond] = useState(5);
    // const [effect, setEffect] = useState(false);


    // 과제 조건 3번 충족
    useEffect(() => {
            if (second === 0) return;

            const timer = setInterval(() => {
                setSecond((prev) => prev - 1);
            },1000);

            return () => clearInterval(timer);
        },[second]);

        return (
            <div>
                {second > 0 && (
                <div className="effect-container">
                    <h2 className="fighting">흐에!! 멋사 화이팅</h2>
                    <span>{second}초 뒤에 폭파됩니다!</span>
                </div>
                )}
            </div>
        )   
}

export default BombTimer;