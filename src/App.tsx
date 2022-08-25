import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

import styles from "./App.module.css";
import "./global.css";
import { List } from "./components/List";

export function App() {
  return (
    <div>
      <Header />
      <div>
        <main>
          <NewTask />
          <div className={styles.wrapper}>
          <List />
          
          </div>
        </main>
      </div>
    </div>
  );
}
