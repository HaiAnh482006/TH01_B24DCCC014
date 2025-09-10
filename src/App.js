import TodoApp from "./bai2";
import CounterApp from "./bai1";
import ColorApp from "./bai3";
import ClockApp from "./bai5";
import StudentApp from "./bai4";

function App() {
  return (
    <div style={{padding: 20}}>
      <div style={{fontSize: 22, fontWeight: "bold"}}>Bài thực hành 01</div>
      <div>
        <b>Bài 1: Ứng dụng Đếm số:</b>
      </div>
      <CounterApp />
      <br />
      <div>
        <b>Bài 2: Danh sách công việc:</b>
      </div>
      <TodoApp />
      <br />
      <div>
        <b>Bài 3: Ứng dụng đổi màu nền:</b>
      </div>
      <ColorApp />
      <br />
      <div>
        <b>Bài 4: Thẻ thông tin sinh viên:</b>
      </div>
      <StudentApp />
      <br />
      <div>
        <b>Bài 5: Đồng hồ:</b>
      </div>
      <ClockApp />
    </div>
  );
}

export default App;
