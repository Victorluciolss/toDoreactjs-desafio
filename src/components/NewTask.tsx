import styles from "./NewTask.module.css";

import plus from "../assets/plus.svg";

export function NewTask() {
  return (
    <form className={styles.task}>
      <input name="task" placeholder="Adicione uma nova tarefa"/>
      <button type="submit"> 
         criar  
        <img src={plus} alt="button" />
        </button>
      
      
    </form>
  );
}
