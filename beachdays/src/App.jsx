import "./App.css";
import WeekDays from "./WeekDays";
import { useState, useEffect, useRef } from "react";
function App() {
  const [currentDayOfMonth, setCurrentDayOfMonth] = useState("");
  const flag = true;
  useEffect(() => {
    const now = new Date();
    const dayOfMonth = now.getDate();
    setCurrentDayOfMonth(dayOfMonth);
  }, []);

  const pin = 2002;
  let monthPin = 0;
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // ------
  var [date, setDate] = useState(new Date());
  let buttonRef = useRef(null);
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  // ------
  const d = new Date();
  let monthName = month[d.getMonth()];
  if (monthName == "June") {
    monthPin = 6;
  } else if (monthName == "July") {
    monthPin = 7;
  } else {
    monthPin = 8;
  }
  let counterInput = useRef(0);
  const [inputValue, setInputValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  function setChange(event) {
    setInputValue(event.target.value);
    setButtonClicked(false);
    counterInput.current = counterInput.current + 1;
    if (counterInput.current > 1) {
      // buttonRef.current.focus();
      setButtonClicked(!buttonClicked);
    }
  }
  // function handleButton() {
  //   setButtonClicked(!buttonClicked);
  // }

  const strDayMonth = currentDayOfMonth.toString();
  const strMonth = monthPin.toString();
  const pin1 = strDayMonth + strMonth;
  const pin2 = parseInt(pin1);

  const [hint, setHint] = useState();

  return (
    <>
      {/* test changes */}
      {(inputValue == pin2) & buttonClicked ? (
        <>
          <div className="date">
            <h1>
              {currentDayOfMonth}-{monthName}{" "}
            </h1>
            <p className="time"> {date.toLocaleTimeString()}</p>
          </div>
          <div className="App">
            <header className="App-header">
              <h1>Tips Καλοκαίρι</h1>
              <WeekDays />
            </header>
          </div>
        </>
      ) : (
        <div className="App-header">
          <label className="label">Enter pin to unlock</label>
          <br />
          <input
            autoFocus
            onChange={setChange}
            value={inputValue}
            type="password"
            placeholder="Enter Pin"
            className="input"
          />
          {/* <button ref={buttonRef} onClick={handleButton} className="btn">
            Login
          </button> */}
          {hint ? (
            <p>If you were really intersted, you would know...</p>
          ) : (
            <button
              onClick={() => {
                setHint(!hint);
              }}
              className="hint"
            >
              Give me a hint...
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default App;
