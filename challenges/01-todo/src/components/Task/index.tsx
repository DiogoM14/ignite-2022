import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./styles.module.css";

export function Task({ text }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleOnCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <div className={styles.taskContainer}>
      <input type={"checkbox"} onClick={handleOnCheck} />

      <p
        style={{
          textDecoration: isChecked ? "line-through" : "none",
        }}
      >
        {text}
      </p>

      <button>
        <Trash size={24} color={"#808080"} />
      </button>
    </div>
  );
}
