import classes from "./Day.module.css";

export default function Day({ dayOfMonth, tipOfTheDay }) {
  let flag = true;
  let flag1 = true;
  if (tipOfTheDay == "-") {
    flag1 = false;
  }
  if (tipOfTheDay == "") {
    flag = false;
  }

  return (
    <>
      <p
        className={
          flag && flag1 ? classes.worked : flag1 ? classes.rest : classes.keno
        }
      >
        {dayOfMonth} <code className={classes.tip}>{tipOfTheDay}</code>
      </p>
    </>
  );
}
