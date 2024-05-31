import "./App.css";
import WeekDays from "./WeekDays";
import { useState, useEffect } from "react";
function App() {
  const [currentDayOfMonth, setCurrentDayOfMonth] = useState("");
  const flag = true;
  useEffect(() => {
    const now = new Date();
    const dayOfMonth = now.getDate();
    setCurrentDayOfMonth(dayOfMonth);
  }, []);

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

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  // ------
  const d = new Date();
  let monthName = month[d.getMonth()];

  const [inputValue, setInputValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  function setChange(event) {
    setInputValue(event.target.value);
    setButtonClicked(false);
  }
  function handleButton() {
    setButtonClicked(!buttonClicked);
  }

  return (
    <>
      {(inputValue == 2002) & buttonClicked ? (
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
            onChange={setChange}
            value={inputValue}
            type="text"
            placeholder="Enter Pin"
            className="input"
          />
          <button onClick={handleButton} className="btn">
            Login
          </button>
        </div>
      )}
    </>
  );
}

export default App;
