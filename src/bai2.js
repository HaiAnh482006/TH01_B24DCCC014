import React, {useState} from "react";

function TodoItem({text}) {
  return <li>{text}</li>;
}

function TodoApp() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  };

  return (
    <div style={{padding: 20}}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {list.map((item, index) => (
          <TodoItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
