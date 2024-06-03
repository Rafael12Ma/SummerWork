import classes from "./June.module.css";
import Day from "./Day";
import { useState, useEffect } from "react";
import TenPrecent from "./tenPrecent";

export default function June({ month }) {
  const [currentDayOfMonth, setCurrentDayOfMonth] = useState("");
  useEffect(() => {
    const now = new Date();
    const dayOfMonth = now.getDate();
    setCurrentDayOfMonth(dayOfMonth);
  }, []);
  const tips = [];
  // DayOfJune is the number in [] bellow
  tips[1] = 0;
  tips[2] = 0;
  tips[3] = 0;
  tips[4] = 0;
  tips[5] = 0;
  tips[6] = 0;
  tips[7] = 0;
  tips[8] = 0;
  tips[9] = 0;
  tips[10] = 0;
  tips[11] = 0;
  tips[12] = 0;
  tips[13] = 0;
  tips[14] = 0;
  tips[15] = 0;
  tips[16] = 0;
  tips[17] = 0;
  tips[18] = 0;
  tips[19] = 0;
  tips[20] = 0;
  tips[21] = 0;
  tips[22] = "-";
  tips[23] = "-";
  tips[24] = "-";
  tips[25] = "-";
  tips[26] = "-";
  tips[27] = "-";
  tips[28] = "-";
  tips[29] = "-";
  tips[30] = "-";
  tips[31] = "-";

  // ___________________--

  let c = 0;
  for (let i = 0; i < tips.length; i++) {
    if (tips[i] > 0) {
      c++;
    }
  }
  let salary = c * 60;
  // σ
  let sum = 0;
  for (let i = 1; i < tips.length; i++) {
    if (tips[i] > 0) {
      sum = sum + tips[i];
    }
  }
  return (
    <>
      {/* <p>{tips[1]}</p> */}
      <header className={classes.header}>
        <h2>{month}</h2>
        <div className={classes.days}>
          <div>
            <h3>Δ</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="3" tipOfTheDay={tips[3]} />
            <Day dayOfMonth="10" tipOfTheDay={tips[10]} />
            <Day dayOfMonth="17" tipOfTheDay={tips[17]} />
            <Day dayOfMonth="24" tipOfTheDay={tips[24]} />
          </div>
          <div>
            <h3>Τ</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="4" tipOfTheDay={tips[4]} />
            <Day dayOfMonth="11" tipOfTheDay={tips[11]} />
            <Day dayOfMonth="18" tipOfTheDay={tips[18]} />
            <Day dayOfMonth="25" tipOfTheDay={tips[25]} />
          </div>
          <div>
            <h3>Τ</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="5" tipOfTheDay={tips[5]} />
            <Day dayOfMonth="12" tipOfTheDay={tips[12]} />
            <Day dayOfMonth="19" tipOfTheDay={tips[19]} />
            <Day dayOfMonth="26" tipOfTheDay={tips[26]} />
          </div>
          <div>
            <h3>Π</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="6" tipOfTheDay={tips[6]} />
            <Day dayOfMonth="13" tipOfTheDay={tips[13]} />
            <Day dayOfMonth="20" tipOfTheDay={tips[20]} />
            <Day dayOfMonth="27" tipOfTheDay={tips[27]} />
          </div>
          <div>
            <h3>Π</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="7" tipOfTheDay={tips[7]} />
            <Day dayOfMonth="14" tipOfTheDay={tips[14]} />
            <Day dayOfMonth="21" tipOfTheDay={tips[21]} />
            <Day dayOfMonth="28" tipOfTheDay={tips[28]} />
          </div>
          <div>
            <h3>Σ</h3>
            <Day dayOfMonth="1" tipOfTheDay={tips[1]} />
            <Day dayOfMonth="8" tipOfTheDay={tips[8]} />
            <Day dayOfMonth="15" tipOfTheDay={tips[15]} />
            <Day dayOfMonth="22" tipOfTheDay={tips[22]} />
            <Day dayOfMonth="29" tipOfTheDay={tips[29]} />
          </div>
          <div>
            <h3>Κ</h3>
            <Day dayOfMonth="2" tipOfTheDay={tips[2]} />
            <Day dayOfMonth="9" tipOfTheDay={tips[9]} />
            <Day dayOfMonth="16" tipOfTheDay={tips[16]} />
            <Day dayOfMonth="23" tipOfTheDay={tips[23]} />
            <Day dayOfMonth="30" tipOfTheDay={tips[30]} />
          </div>
        </div>
        <div className={classes.box}>
          <h3>
            {month} : For {c} days --{">"} {salary}
          </h3>
          {/* {isChanged && <p>einai true</p>} */}
          <h4>
            Σε {c} μέρες έβγαλα {sum} τιπς
          </h4>
          <TenPrecent title="Μελλοντικές Σπουδές" income={salary / 10} />
          <TenPrecent title="Διασκέδαση" income={salary / 10} />
          <TenPrecent title="Αναγκαία" income={salary * 0.5} />
          <TenPrecent title="Προς διάθεση" income={salary / 10} />
          <TenPrecent title="Μελλοντικές Επενδύσεις " income={salary / 10} />
          <TenPrecent title="Sb" income={salary / 100} />
        </div>
      </header>
    </>
  );
}
