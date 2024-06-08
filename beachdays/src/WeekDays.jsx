import June from "./Months/June";
import July from "./Months/July";
import August from "./Months/August";
import classes from "./WeekDays.module.css";
import { useState, useEffect, useRef } from "react";

export default function WeekDays() {
  let ref = useRef(0);

  const [plus, setPlus] = useState(0);
  const [currentDayOfMonth, setCurrentDayOfMonth] = useState("");
  function handleRef() {
    ref.current = ref.current + 1;
    // alert(`You clicked ${ref.current} times`);
  }
  let counter = 0;
  function handlePlus() {
    setPlus(plus + 1);
    alert(`You clicked ${plus} times`);
  }
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
  const d = new Date();
  let monthName = month[d.getMonth()];
  let numDaysLeft = 0;
  if (monthName === "May") {
    numDaysLeft = 90 + 30 - currentDayOfMonth;
  } else if (monthName === "June") {
    numDaysLeft = 90 - currentDayOfMonth;
  } else if (monthName === "July") {
    numDaysLeft = 60 - currentDayOfMonth;
  } else {
    numDaysLeft = 30 - currentDayOfMonth;
  }
  const [sallaryJune, setSallaryJune] = useState(0);
  const [sallaryJuly, setSallaryJuly] = useState(0);
  const [sallaryAugust, setSallaryAugust] = useState(0);
  return (
    <>
      <h2>
        Υπομονή έμειναν άλλες {numDaysLeft} μέρες ή{" "}
        {Math.floor(numDaysLeft / 7)} εβδομάδες{" "}
      </h2>

      <div className={classes.container}>
        <June month="June" setSallary={setSallaryJune} />
        <July month="July" setSallary={setSallaryJuly} />
        <August month="August" setSallary={setSallaryAugust} />
      </div>
      <button onClick={handleRef}>+</button>
      <button onClick={handlePlus}>+</button>
      <p>{ref.current}</p>
      <p>{counter}</p>

      {/* <p>Πρόβλεψη 62 μέρες δουλειά :</p> */}
      {/* <p> 3720 + 900 τιπς</p> */}
      <p>Summary = {sallaryJune + sallaryJuly + sallaryAugust}</p>
    </>
  );
}
