import { useState, useEffect, useRef } from "react";
import useInterval from "../hooks-helpers/useInterval";
import { getCurrentTime } from "../hooks-helpers/helpers";
import StartMenu from "./StartMenu";

export default function Taskbar(props) {
  const [time, setTime] = useState(getCurrentTime());

  // Use custom hook to update state with current time every second
  useInterval(() => setTime(getCurrentTime()), 1000);

  return (
    <div id="taskbar" className="title-bar">
      <StartMenu />
      <div
        id="show-desktop-container"
        onClick={() => props.setWindowActive(!props.windowActive)}
      >
        <img
          id="show-desktop"
          src="images/xp_show_desktop.png"
          alt="XP Show Desktop"
        />
      </div>
      {props.taskbarActive ? (
        <div
          className={
            props.windowActive
              ? "taskbar-program"
              : "taskbar-program program-active"
          }
          onClick={() => {
            props.setWindowActive(!props.windowActive);
          }}
        >
          <img
            className="mdp-preview"
            src="images/mdp_preview.png"
            alt="MDP Preview"
          />
          React Previewer
        </div>
      ) : null}

      <div id="system-tray">
        <img
          id="system-icons"
          src="images/xp_sys_tray_icons.png"
          alt="XP System Tray Icons"
        />
        <div id="time">{time}</div>
      </div>
    </div>
  );
}
