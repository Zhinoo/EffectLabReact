import "./styles.css";
import { useState } from "react";

export default function App() {
  const [activity, setActivity] = useState("");
  const [input, setinput] = useState("");

  function fetcher() {
    fetch("https://www.boredapi.com/api/activity?type=" + input)
      .then((response) => response.json())
      .then((json) => {
        setActivity(json.type + ": " + json.activity);
      });
  }
  useState(() => {
    fetch("https://www.boredapi.com/api/activity?type=" + input)
      .then((response) => response.json())
      .then((json) => {
        setActivity(json.type + ":" + json, activity);
      });
  }, []);
  return (
    <div className="App">
      <input
        onChange={(e) => {
          setinput(e.target.value);
        }}
        placeholder="Enter an activity"
      ></input>
      <button onClick={fetcher}>Search</button>
      <div>{activity}</div>
    </div>
  );
}
