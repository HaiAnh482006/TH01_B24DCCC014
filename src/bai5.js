import React, {useState, useEffect} from "react";

function TimeDisplay({time}) {
  return <h2>{time}</h2>;
}

function ClockApp() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{padding: 20}}>
      <TimeDisplay time={time} />
    </div>
  );
}

export default ClockApp;
