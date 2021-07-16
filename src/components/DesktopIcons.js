import { useState, useEffect, useRef } from "react";

export default function DesktopIcons(props) {
  const [iconSelected, setIconSelected] = useState(null);

  let iconRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!iconRef.current.contains(e.target)) {
        setIconSelected(false);
      }
      // else nothing
    });
  });

  return (
    <div id="desktop-icons-container" ref={iconRef}>
      <div
        id="recycle-bin-icon"
        className={
          iconSelected === "recycle-bin-icon"
            ? "icon-container icon-active"
            : "icon-container"
        }
        onClick={(e) => {
          setIconSelected(e.target.id);
          iconRef.current = e.target;
        }}
        onDoubleClick={() => {
          setIconSelected(null);
        }}
      >
        <img
          id="recycle-bin-img"
          src="images/xp_recycle_bin.png"
          alt="XP Recycle Bin"
        />
        <p>Recycle Bin</p>
      </div>
      <div
        id="mdp-icon"
        className={
          iconSelected === "mdp-icon"
            ? "icon-container icon-active"
            : "icon-container"
        }
        onClick={(e) => {
          setIconSelected(e.target.id);
          iconRef.current = e.target;
        }}
        onDoubleClick={() => {
          props.setTaskbarActive(true);
          props.setWindowActive(true);
          setIconSelected(null);
        }}
      >
        <img
          id="mdp-program-img"
          src="images/mdp_preview.png"
          alt="MDP Preview"
        />
        <p>
          !DMR Markdown
          <br />
          Previewer
        </p>
      </div>
    </div>
  );
}
