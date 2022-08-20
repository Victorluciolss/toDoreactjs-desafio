import styles from "./Task.module.css";
export function Task() {
  return (
    <div className={styles.task}>
      <input></input>
      <button>Criar</button>
    </div>
  );
}
