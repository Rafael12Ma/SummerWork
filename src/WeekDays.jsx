import June from "./Months/June";
import July from "./Months/July";
import August from "./Months/August";
import classes from "./WeekDays.module.css";
import { useState, useEffect } from "react";

export default function WeekDays() {
  const [currentDayOfMonth, setCurrentDayOfMonth] = useState("");

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
  if (monthName == "May") {
    numDaysLeft = 90 + 30 - currentDayOfMonth;
  } else if (monthName == "June") {
    numDaysLeft = 90 - currentDayOfMonth;
  } else if (monthName == "July") {
    numDaysLeft = 60 - currentDayOfMonth;
  } else {
    numDaysLeft = 30 - currentDayOfMonth;
  }
  const [sallaryJune, setSallaryJune] = useState(0);
  const [sallaryJuly, setSallaryJuly] = useState(0);
  const [sallaryAugust, setSallaryAugust] = useState(0);
  // + atoma tin mera p.x 3+2+4+4+3=16*3=48 se 6 meres
  let petrol = 3.5 + 3.5 + 3.5;

  function GetSallaryJune(sal) {
    setSallaryJune(sal);
  }
  function GetSallaryJuly(sal) {
    setSallaryJuly(sal);
  }
  function GetSallaryAugust(sal) {
    setSallaryAugust(sal);
  }
  return (
    <>
      <h2>
        Υπομονή έμειναν άλλες {numDaysLeft} μέρες ή{" "}
        {Math.floor(numDaysLeft / 7)} εβδομάδες{" "}
      </h2>

      <div className={classes.container}>
        <June month="June" getSallary={GetSallaryJune} />
        <July month="July" getSallary={GetSallaryJuly} />
        <August month="August" getSallary={GetSallaryAugust} />
      </div>
      {/* <button onClick={handleRef}>+</button>
      <button onClick={handlePlus}>+</button>
      <p>{ref.current}</p>
      <p>{counter}</p> */}

      {/* <p>Πρόβλεψη 62 μέρες δουλειά :</p> */}
      {/* <p> 3720 + 900 τιπς</p> */}
      <p>Summary = {sallaryJune + sallaryJuly + sallaryAugust}</p>
      <p>Βενζίνες : {petrol * 3}</p>
    </>
  );
}
