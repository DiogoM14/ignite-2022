import { ClipboardText } from "phosphor-react";
import styles from "./styles.module.css";

export function NoTasks() {
  return (
    <main className={styles.noTasks}>
      <ClipboardText size={56} color={"#333333"} />

      <div>
        <h4>You do not have any tasks</h4>
        <p>Add tasks and order your to do items</p>
      </div>
    </main>
  );
}
