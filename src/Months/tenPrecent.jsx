import cl from "./tenPrecent.module.css";

export default function TenPrecent({ title, income }) {
  return (
    <>
  
      <div className={cl.container}>
        <p className={cl.title}>{title} :</p>
        <p className={cl.income}>{income}</p>
      </div>
    </>
  );
}
