import React, {useState} from "react";

function StudentCard({name, age, className}) {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        margin: 10,
        borderRadius: 8,
      }}
    >
      <h3>{name}</h3>
      <button onClick={() => setShow(!show)}>
        {show ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
      {show && (
        <p>
          Tuổi: {age} - Lớp: {className}
        </p>
      )}
    </div>
  );
}

function StudentApp() {
  const students = [
    {name: "Lưu Hải Anh", age: 19, className: "UDU01"},
    {name: "Trần Văn Hiếu", age: 19, className: "UDU02"},
    {name: "Lê Văn Thành", age: 19, className: "UDU03"},
  ];

  return (
    <div style={{padding: 20}}>
      {students.map((s, i) => (
        <StudentCard
          key={i}
          name={s.name}
          age={s.age}
          className={s.className}
        />
      ))}
    </div>
  );
}

export default StudentApp;
