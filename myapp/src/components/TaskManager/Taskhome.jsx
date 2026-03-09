import { useState } from "react";
import Taskform from "./TaskForm";
import Tasklist from "./Tasklist";



export default function TaskHome() {
  const [tasks, settasks] = useState([]);

  const addtask = (text) => {
    const newtask = {
      id: Date.now(),
      text,
      completed: false
    };
    settasks([...tasks, newtask]);
  };

  const deletes = (id) => {
    settasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <Taskform addtask={addtask} />
      <Tasklist addlist={tasks} deletes={deletes} />
    </div>
  );
}
