import styles from "./List.module.css";


export function List () {
    return(
        <div className={styles.list}>
          <header>
            <text className={styles.created}>Tarefas criadas</text>
            <div>0</div>
            <text className={styles.completed}>Concluídas</text>
            <div>0</div>
          </header>
          <div>
            <input></input>
            <img src="" alt="" />
          </div>
        </div>
    );
}