import { FormEvent, useState } from "react";
import styles from "./App.module.css";
import { AddButton } from "./components/AddButton";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { TasksSection } from "./components/TasksSection";

function App() {
  const [newTasks, setNewTasks] = useState([]);
  const [tasksText, setTasksText] = useState("");

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    setNewTasks([...newTasks, tasksText]);
    setTasksText("");
  }

  function handleDeleteTask() {
    setNewTasks(newTasks.filter((task) => task !== tasksText));
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <form onSubmit={handleAddTask} className={styles.addTaskSection}>
          <Input
            onChange={(e) => setTasksText(e.target.value)}
            value={tasksText}
          />
          <AddButton type={"submit"} />
        </form>

        <section className={styles.tasksSection}>
          <TasksSection
            newTasks={newTasks}
            handleDeleteTask={handleDeleteTask}
          />
        </section>
      </main>
    </>
  );
}

export default App;
