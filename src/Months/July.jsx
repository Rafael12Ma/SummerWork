import classes from "./July.module.css";
import Day from "./Day";

export default function July({ month }) {
  return (
    <>
      <header className={classes.header}>
        <h2>{month}</h2>
        <div className={classes.days}>
          <div>
            <h3>Δ</h3>
            <Day dayOfMonth="1" tipOfTheDay="-" />
            <Day dayOfMonth="8" tipOfTheDay="-" />
            <Day dayOfMonth="15" tipOfTheDay="-" />
            <Day dayOfMonth="22" tipOfTheDay="-" />
            <Day dayOfMonth="29" tipOfTheDay="-" />
          </div>
          <div>
            <h3>Τ</h3>
            <Day dayOfMonth="2" tipOfTheDay="-" />
            <Day dayOfMonth="9" tipOfTheDay="-" />
            <Day dayOfMonth="16" tipOfTheDay="-" />
            <Day dayOfMonth="23" tipOfTheDay="-" />
            <Day dayOfMonth="30" tipOfTheDay="-" />
          </div>
          <div>
            <h3>Τ</h3>
            <Day dayOfMonth="3" tipOfTheDay="-" />
            <Day dayOfMonth="10" tipOfTheDay="-" />
            <Day dayOfMonth="17" tipOfTheDay="-" />
            <Day dayOfMonth="24" tipOfTheDay="-" />
            <Day dayOfMonth="31" tipOfTheDay="-" />
          </div>
          <div>
            <h3>Π</h3>
            <Day dayOfMonth="4" tipOfTheDay="-" />
            <Day dayOfMonth="11" tipOfTheDay="-" />
            <Day dayOfMonth="18" tipOfTheDay="-" />
            <Day dayOfMonth="25" tipOfTheDay="-" />
            <Day dayOfMonth="-" tipOfTheDay="" />
          </div>
          <div>
            <h3>Π</h3>
            <Day dayOfMonth="5" tipOfTheDay="-" />
            <Day dayOfMonth="12" tipOfTheDay="-" />
            <Day dayOfMonth="19" tipOfTheDay="-" />
            <Day dayOfMonth="26" tipOfTheDay="-" />
            <Day dayOfMonth="-" tipOfTheDay="" />
          </div>
          <div>
            <h3>Σ</h3>
            <Day dayOfMonth="6" tipOfTheDay="-" />
            <Day dayOfMonth="13" tipOfTheDay="-" />
            <Day dayOfMonth="20" tipOfTheDay="-" />
            <Day dayOfMonth="27" tipOfTheDay="-" />
            <Day dayOfMonth="-" tipOfTheDay="" />
          </div>
          <div>
            <h3>Κ</h3>
            <Day dayOfMonth="7" tipOfTheDay="-" />
            <Day dayOfMonth="14" tipOfTheDay="-" />
            <Day dayOfMonth="21" tipOfTheDay="-" />
            <Day dayOfMonth="28" tipOfTheDay="-" />
            <Day dayOfMonth="-" tipOfTheDay="" />
          </div>
        </div>
        {/* {isChanged && <p>einai true</p>} */}
      </header>
    </>
  );
}
