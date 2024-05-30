import "./App.css";
import WeekDays from "./WeekDays";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Tips Καλοκαίρι</h1>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <WeekDays />
        </header>
      </div>
    </>
  );
}

export default App;
