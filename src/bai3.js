import React, {useState} from "react";

function ColorBox({color}) {
  return (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: color,
        marginTop: 20,
      }}
    ></div>
  );
}

function ColorApp() {
  const colors = ["red", "green", "blue", "yellow"];
  const [color, setColor] = useState("white");

  return (
    <div style={{padding: 20}}>
      {colors.map((c, i) => (
        <button key={i} onClick={() => setColor(c)} style={{margin: 5}}>
          {c}
        </button>
      ))}
      <ColorBox color={color} />
    </div>
  );
}

export default ColorApp;
