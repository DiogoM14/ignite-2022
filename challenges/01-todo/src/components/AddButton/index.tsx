import { PlusCircle } from "phosphor-react";
import styles from "./styles.module.css";

export function AddButton({ ...props }) {
  return (
    <button className={styles.button} {...props}>
      Criar
      <PlusCircle size={16} />
    </button>
  );
}
