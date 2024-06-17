import "./App.css";
import ForBackend from "./ForBackend";
import WeekDays from "./WeekDays";
import PostLists from "./Backe/PostLists";
import { useState, useEffect, useRef } from "react";
import MainHeader from "./Backe/MainHeader";
function App() {
  const [currentDayOfMonth, setCurrentDayOfMonth] = useState("");
  useEffect(() => {
    const now = new Date();
    const dayOfMonth = now.getDate();
    setCurrentDayOfMonth(dayOfMonth);
  }, []);

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
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  // ------
  const d = new Date();
  let monthName = month[d.getMonth()];
  if (monthName === "June") {
    monthPin = 6;
  } else if (monthName === "July") {
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
    console.log(counterInput);
    if (counterInput.current > 1) {
      // buttonRef.current.focus();
      setButtonClicked(true);
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
  const [isChanged, setIsChanged] = useState();

  // function handleChanging(event) {
  //   event.preventDefault();
  //   const message = {
  //     tip: event.target.value,
  //   };
  //   fetch("http://localhost:8080/tips", {
  //     method: "Post",
  //     body: JSON.stringify(message),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setIsChanged(event.target.value);
  // }

  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      {/* test changes */}
      {(inputValue == pin2) & buttonClicked ? (
        <>
          <div className="date">
            <h1>
              {currentDayOfMonth} - {monthName}
              {"  "}
            </h1>
            <p className="time"> {date.toLocaleTimeString()}</p>
          </div>
          <div className="App">
            <header className="App-header">
              <MainHeader onCreatePost={showModalHandler} />
              <PostLists
                isPosting={modalIsVisible}
                onStopPosting={hideModalHandler}
              />
              <ForBackend />
              <br />
              <br />
              <br />
              {/* <form className="form" action="" onSubmit={submitHandler}>
                <input
                  required
                  onChange={(e) => handleChanging(e)}
                  placeholder="Press something..."
                  autoFocus
                  type="text"
                />
                <button type="submit" className="btn">
                  Dwse
                </button>
              </form> */}
              <p>{isChanged}</p>
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
