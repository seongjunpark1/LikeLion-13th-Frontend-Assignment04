import { useEffect, useState } from "react";
import "./BombMessage.css"

// 과제 조건 1번 충족
function BombTimer() {
    const [second, setSecond] = useState(5);
    const [effect, setEffect] = useState(false);


    // 과제 조건 3번 충족
    useEffect(() => {
            if (second === 0) {
                setEffect(true);
                return;
            } 

            const timer = setInterval(() => {
                setSecond((prev) => prev - 1);
            },1000);

            return () => clearInterval(timer);
        },[second]);

        return (
            <div className="effect-container">
                <h2>과연 뭐가 나올까?</h2>
                <h2 className={effect ? "fighting" : "countDown"}>
                    {/* 과제 조건 2번 충족 */}
                    {effect ? "흐에!! 멋사 화이팅" : `${second}초 후에 폭파됩니다.`}
                </h2>
            </div>
        )
        
}

export default BombTimer;