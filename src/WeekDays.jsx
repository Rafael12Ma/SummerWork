import June from "./Months/June";
import July from "./Months/July";
import August from "./Months/August";
import classes from "./WeekDays.module.css";
import { useState, useEffect } from "react";

export default function WeekDays() {
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

  return (
    <>
      <h2>
        Υπομονή έμειναν άλλες {numDaysLeft} μέρες ή{" "}
        {Math.floor(numDaysLeft / 7)} εβδομάδες{" "}
      </h2>
      <div className={classes.container}>
        <June month="June" />
        <July month="July" />
        <August month="August" />
      </div>
      <p>Πρόβλεψη - 62 μέρες δουλειά</p>
    </>
  );
}
