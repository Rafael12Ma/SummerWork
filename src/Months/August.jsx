import classes from "./August.module.css";
import Day from "./Day";
import TenPrecent from "./tenPrecent";
import { useState, useEffect } from "react";

export default function Ausust({ month }) {
  const [isClicked, setIsClicked] = useState(false);
  const [currentDayOfMonth, setCurrentDayOfMonth] = useState("");
  useEffect(() => {
    const now = new Date();
    const dayOfMonth = now.getDate();
    setCurrentDayOfMonth(dayOfMonth);
  }, []);
  const tips = [];
  // DayOfJune is the number in [] bellow
  tips[1] = "-";
  tips[2] = "-";
  tips[3] = "-";
  tips[4] = "-";
  tips[5] = "-";
  tips[6] = "-";
  tips[7] = "-";
  tips[8] = "-";
  tips[9] = "-";
  tips[10] = "-";
  tips[11] = "-";
  tips[12] = "-";
  tips[13] = "-";
  tips[14] = "-";
  tips[15] = "-";
  tips[16] = "-";
  tips[17] = "-";
  tips[18] = "-";
  tips[19] = "-";
  tips[20] = "-";
  tips[21] = "-";
  tips[22] = "-";
  tips[23] = "-";
  tips[24] = "";
  tips[25] = "-";
  tips[26] = "-";
  tips[27] = "-";
  tips[28] = "-";
  tips[29] = "-";
  tips[30] = "-";
  tips[31] = "-";
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
      {/* <p>{currentDayOfMonth}</p> */}

      <header className={classes.header}>
        <h2>{month}</h2>
        <div className={classes.days}>
          <div>
            <h3>Δ</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="5" tipOfTheDay={tips[5]} />
            <Day dayOfMonth="12" tipOfTheDay={tips[12]} />
            <Day dayOfMonth="19" tipOfTheDay={tips[19]} />
            <Day dayOfMonth="26" tipOfTheDay={tips[26]} />
          </div>
          <div>
            <h3>Τ</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="6" tipOfTheDay={tips[6]} />
            <Day dayOfMonth="13" tipOfTheDay={tips[13]} />
            <Day dayOfMonth="20" tipOfTheDay={tips[20]} />
            <Day dayOfMonth="27" tipOfTheDay={tips[27]} />
          </div>
          <div>
            <h3>Τ</h3>
            <Day dayOfMonth="-" tipOfTheDay="" />
            <Day dayOfMonth="7" tipOfTheDay={tips[7]} />
            <Day dayOfMonth="14" tipOfTheDay={tips[14]} />
            <Day dayOfMonth="21" tipOfTheDay={tips[21]} />
            <Day dayOfMonth="28" tipOfTheDay={tips[28]} />
          </div>
          <div>
            <h3>Π</h3>
            <Day dayOfMonth="1" tipOfTheDay={tips[1]} />
            <Day dayOfMonth="8" tipOfTheDay={tips[8]} />
            <Day dayOfMonth="15" tipOfTheDay={tips[15]} />
            <Day dayOfMonth="22" tipOfTheDay={tips[22]} />
            <Day dayOfMonth="29" tipOfTheDay={tips[29]} />
          </div>
          <div>
            <h3>Π</h3>
            <Day dayOfMonth="2" tipOfTheDay={tips[2]} />
            <Day dayOfMonth="9" tipOfTheDay={tips[9]} />
            <Day dayOfMonth="16" tipOfTheDay={tips[16]} />
            <Day dayOfMonth="23" tipOfTheDay={tips[23]} />
            <Day dayOfMonth="30" tipOfTheDay={tips[30]} />
          </div>
          <div>
            <h3>Σ</h3>
            <Day dayOfMonth="3" tipOfTheDay={tips[3]} />
            <Day dayOfMonth="10" tipOfTheDay={tips[10]} />
            <Day dayOfMonth="17" tipOfTheDay={tips[17]} />
            <Day dayOfMonth="24" tipOfTheDay={tips[24]} />
            <Day dayOfMonth="31" tipOfTheDay={tips[31]} />
          </div>
          <div>
            <h3>Κ</h3>
            <Day dayOfMonth="4" tipOfTheDay={tips[4]} />
            <Day dayOfMonth="11" tipOfTheDay={tips[11]} />
            <Day dayOfMonth="18" tipOfTheDay={tips[18]} />
            <Day dayOfMonth="25" tipOfTheDay={tips[25]} />
            {/* <Day dayOfMonth="-" tipOfTheDay="" /> */}
          </div>
        </div>
        <button
          className={classes.btn}
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          see more
        </button>
        {isClicked && (
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
        )}
      </header>
    </>
  );
}
