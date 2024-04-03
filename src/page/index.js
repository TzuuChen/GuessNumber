import "./index.css";
import React, { useState, useEffect} from "react";

const Block1 = () => {
  const [guess, setGuess] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");
  const [guessCount, setGuessCount] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [target, setTarget] = useState(Math.floor(Math.random() * 100) + 1);
  const [lower, setLower] = useState(1);
  const [upper, setUpper] = useState(100);
  const [restart, setRestart] = useState();
  const guessNumber = parseInt(guess);

  useEffect(() => {
    console.log(target);
  }, [target]);

  useEffect(() => {
    if (guessCount > 5 && guessNumber !== target) {
      setMessage(`失敗了！答案是${target}`);
      setDisabled(true);
      setColor("red");
      delayDisplay();
      setDisabled2(true);
      setTimeout(playagain, 6000);
    }
  }, [guessCount, target, guessNumber]);

  function check() {
    setAnswer(`答案是：${target}`);
    setDisabled(true);
    setTimeout(playagain, 6000);
    delayDisplay();
    setDisabled2(true);
  }
  function handleInputChange(text) {
    setGuess(text.target.value);
  }
  function compare() {
    setGuessCount(guessCount + 1);
    console.log(guessCount);
    if (guessNumber === target) {
      setMessage("答對了！");
      setColor("green");
      setDisabled(true);
      setDisabled2(false);
    } else if (guessNumber > target) {
      setMessage("太大了！再猜一次！");
      setColor("red");
      setUpper(guess);
    } else if (guessNumber < target) {
      setMessage("太小了！再猜一次！");
      setColor("red");
      setLower(guess);
    }
  }

  function playagain() {
    setGuessCount(1);
    setGuess("");
    setMessage("");
    setAnswer("");
    setDisabled(false);
    setTarget(Math.floor(Math.random() * 100) + 1);
    setLower(1);
    setUpper(100);
    setDisabled2(false);
  }

  function delayDisplay() {
    setColor("red")
    setTimeout(function () {
      setRestart("倒數計時：5");
    }, 1000);
    setTimeout(function () {
      setRestart("倒數計時：4");
    }, 2000);
    setTimeout(function () {
      setRestart("倒數計時：3");
    }, 3000);
    setTimeout(function () {
      setRestart("倒數計時：2");
    }, 4000);
    setTimeout(function () {
      setRestart("倒數計時：1");
    }, 5000);
    setTimeout(function () {
      setRestart("");
    }, 6000);
  }

  return (
    <div className="border">
      <h1>猜數字遊戲</h1>
      <h2>
        <span className="lowerbound">{lower}</span>到
        <span className="upperbound">{upper}</span>
        之間的數字，你猜是多少？
      </h2>
      <input
        type="text"
        id="guessField"
        value={guess}
        onChange={handleInputChange}
      />
      <button onClick={compare} disabled={disabled} className="guess">
        猜!
      </button>
      <button onClick={check} disabled={disabled} className="answer">
        揭曉答案
      </button>
      <button onClick={playagain} disabled={disabled2} className="palyagain">
        再玩一次
      </button>
      <p className={color}>{message}</p>
      <p>{answer}</p>
      <p className={color}>{restart}</p>
    </div>
  );
};

export default Block1;
