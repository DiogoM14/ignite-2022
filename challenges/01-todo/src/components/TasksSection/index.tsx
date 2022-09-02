import { Task } from "../Task";
import { Header } from "./Header";
import { NoTasks } from "./NoTasks";

export function TasksSection({ newTasks, handleDeleteTask }) {
  return (
    <>
      <Header />

      {/* <NoTasks /> */}
      {newTasks.length == 0 ? (
        <NoTasks />
      ) : (
        newTasks.map((task) => <Task key={task} text={task} />)
      )}
    </>
  );
}
