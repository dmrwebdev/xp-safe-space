import { useState, useEffect } from "react";
import "xp.css/dist/XP.css";
import Window from "./components/Window";
import DesktopIcons from "./components/DesktopIcons";
import placeholder from "./placeholder";
import Taskbar from "./components/Taskbar";

function App() {
  const [windowActive, setWindowActive] = useState(true);
  const [taskbarActive, setTaskbarActive] = useState(true);
  const [userInput, setUserInput] = useState(placeholder);
  /*   const [lastClicked, setLastClicked] = useState(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.addEventListener("mousedown", handleClick);
    };
  }, []);

  function handleClick(e) {
    setLastClicked(e.target);
  } */

  return (
    <>
      {windowActive ? (
        <Window
          userInput={userInput}
          setUserInput={setUserInput}
          setWindowActive={setWindowActive}
          setTaskbarActive={setTaskbarActive}
        />
      ) : null}
      <DesktopIcons
        setTaskbarActive={setTaskbarActive}
        setWindowActive={setWindowActive}
      />
      <Taskbar
        taskbarActive={taskbarActive}
        setTaskbarActive={setTaskbarActive}
        windowActive={windowActive}
        setWindowActive={setWindowActive}
        /* lastClicked={lastClicked} */
      />
    </>
  );
}

export default App;
