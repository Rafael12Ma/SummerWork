import classes from "./June.module.css";
import Day from "./Day";
import { useState, useEffect } from "react";

export default function June({ month }) {
  const [currentDayOfMonth, setCurrentDayOfMonth] = useState("");
  const flag = true;
  useEffect(() => {
    const now = new Date();
    const dayOfMonth = now.getDate();
    setCurrentDayOfMonth(dayOfMonth);
  }, []);
  const tips = [];
  // DayOfJune is the number in [] bellow
  tips[1] = 22;
  tips[3] = 21;
  tips[22] = 23;
  let c = 0;
  for (let i = 0; i < tips.length; i++) {
    if (tips[i]) {
      c++;
    }
  }
  // σ
  return (
    <>
      {/* <p>{tips[1]}</p> */}
      <header className={classes.header}>
        <h3>
          For {month} i Worked {c} days
        </h3>
        <h2>{month}</h2>
        <div className={classes.days}>
          <div>
            <h3>Δ</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="3" tipOfTheDay="-" />
            <Day dayOfMonth="10" tipOfTheDay="-" />
            <Day dayOfMonth="17" tipOfTheDay="-" />
            <Day dayOfMonth="24" tipOfTheDay="-" />
          </div>
          <div>
            <h3>Τ</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="4" tipOfTheDay="-" />
            <Day dayOfMonth="11" tipOfTheDay="-" />
            <Day dayOfMonth="18" tipOfTheDay="-" />
            <Day dayOfMonth="25" tipOfTheDay="-" />
          </div>
          <div>
            <h3>Τ</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="5" tipOfTheDay="-" />
            <Day dayOfMonth="13" tipOfTheDay="-" />
            <Day dayOfMonth="19" tipOfTheDay="-" />
            <Day dayOfMonth="26" tipOfTheDay="-" />
          </div>
          <div>
            <h3>Π</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="6" tipOfTheDay="-" />
            <Day dayOfMonth="14" tipOfTheDay="-" />
            <Day dayOfMonth="20" tipOfTheDay="-" />
            <Day dayOfMonth="27" tipOfTheDay="-" />
          </div>
          <div>
            <h3>Π</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="7" tipOfTheDay="-" />
            <Day dayOfMonth="15" tipOfTheDay="-" />
            <Day dayOfMonth="21" tipOfTheDay="-" />
            <Day dayOfMonth="28" tipOfTheDay="-" />
          </div>
          <div>
            <h3>Σ</h3>
            <Day dayOfMonth="1" tipOfTheDay="-" />
            <Day dayOfMonth="8" tipOfTheDay="-" />
            <Day dayOfMonth="16" tipOfTheDay="-" />
            <Day dayOfMonth="22" tipOfTheDay="-" />
            <Day dayOfMonth="29" tipOfTheDay="-" />
          </div>
          <div>
            <h3>Κ</h3>
            <Day dayOfMonth="2" tipOfTheDay="-" />
            <Day dayOfMonth="9" tipOfTheDay="-" />
            <Day dayOfMonth="17" tipOfTheDay="-" />
            <Day dayOfMonth="23" tipOfTheDay="-" />
            <Day dayOfMonth="30" tipOfTheDay="-" />
          </div>
        </div>
        {/* {isChanged && <p>einai true</p>} */}
      </header>
    </>
  );
}
