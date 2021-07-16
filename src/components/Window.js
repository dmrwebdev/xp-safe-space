import { useState } from "react";
import marked from "marked";
import DOMPurify from "dompurify";

import TitleBar from "./TitleBar";
import CommandBar from "./CommandBar";

//Allow marked to interpret carriage returns and render them as line breaks
marked.setOptions({
  gfm: true,
  breaks: true,
});

//TODO
//Clear button
//Restore button
export default function Window(props) {
  /* const [windowOpen, setWindowOpen] = useState(true); */

  return (
    <main
      id="window-main"
      className="window"
      style={{ width: "100%" }} /* Inline used by XP.css */
    >
      <TitleBar
        setWindowActive={props.setWindowActive}
        setTaskbarActive={props.setTaskbarActive}
      />
      <CommandBar />
      <div id="markdown-container" className="window-body">
        <textarea
          id="editor"
          type="text"
          value={props.userInput}
          onChange={(e) => props.setUserInput(e.target.value)}
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              marked(props.userInput, new marked.Renderer())
            ),
          }}
        />
      </div>
    </main>
  );
}
