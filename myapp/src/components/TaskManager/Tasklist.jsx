export default function Tasklist({ addlist, deletes }) {
  return (
    <ul>
      {addlist.map((task) => (
        <li
          key={task.id}
          onClick={() => deletes(task.id)}
          style={{ cursor: "pointer" }}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
}
