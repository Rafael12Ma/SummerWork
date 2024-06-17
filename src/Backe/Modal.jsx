import classes from "./Modal.module.css";

export default function Modal({ children, onClose }) {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div onClick={onClose} className={classes.backdrop}>
        <dialog open className={classes.modal} onClick={stopPropagation}>
          {children}
        </dialog>
      </div>
    </>
  );
}
