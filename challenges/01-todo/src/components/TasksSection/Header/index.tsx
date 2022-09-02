import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.tasksHeader}>
      <div>
        <p>Created tasks</p>
        <span>0</span>
      </div>

      <div>
        <p>Completed</p>
        <span>0</span>
      </div>
    </header>
  );
}
