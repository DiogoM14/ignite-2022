import styles from "./styles.module.css";

export function Input({ ...props }) {
  return (
    <input className={styles.input} placeholder={"Add a new task"} {...props} />
  );
}
