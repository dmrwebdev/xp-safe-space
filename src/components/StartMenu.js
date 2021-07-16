import { useState, useEffect, useRef } from "react";

export default function StartMenu(props) {
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  let startRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!startRef.current.contains(e.target)) {
        setStartMenuOpen(false);
      }
      // else nothing
    });
  });

  return (
    <div id="start-container" ref={startRef}>
      <img
        id="start-btn"
        className={props.startMenuOpen ? "start-open" : null}
        src="images/xp_start.png"
        alt="XP Start Menu"
        onClick={() => setStartMenuOpen((startMenuOpen) => !startMenuOpen)}
      />
      {startMenuOpen ? (
        <div id="start-menu">
          <div id="start-title-bar" className="title-bar">
            <img id="start-logo" src="images/dwd.png" alt="!DMR" />
            <span>Develop With Derek</span>
          </div>
          <div id="start-app-container">
            <div id="start-app-programs">
              <ul>
                <li>Mozilla</li>
                <hr />
                <li>Windows Media Player</li>
                <li>Command Prompt</li>
                <li>Windows Media Player</li>
                <li>Paint</li>
                <li>Notepad</li>
                <li>Minesweeper</li>
                <li id="start-all-programs">
                  <div>
                    All Programs <img src="" alt="" />{" "}
                  </div>
                </li>
              </ul>
            </div>
            <div id="start-app-computer">computer</div>
          </div>
          <div id="start-commands" className="title-bar">
            <div
              id="start-log-off-container"
              className="start-command-container"
            >
              <img src="images/xp_log_off.png" alt="XP Log Off Icon" />
              <span>L</span>og Off
            </div>
            <div
              id="start-shutdown-container"
              className="start-command-container"
            >
              <img src="images/xp_shutdown.png" alt="XP Shutdown Icon" />T
              <span>u</span>rn Off Computer
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
  /*   } else {
    return null;
  } */
}

//Ref on
