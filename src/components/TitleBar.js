import mdpPreview from "../assets/mdp-preview.png"

export default function TitleBar(props) {
  return (
    <div className="title-bar">
      <div className="title-bar-text">
        <img
          className="mdp-preview"
          src={mdpPreview}
          alt="MDP Preview"
        />
        !DMR Markdown Preview
      </div>
      <div className="title-bar-controls">
        <button
          aria-label="Minimize"
          onClick={() => props.setWindowActive(false)}
        ></button>
        <button /* onClick={} */ aria-label="Maximize"></button>
        <button
          aria-label="Close"
          onClick={() => {
            props.setWindowActive(false);
            props.setTaskbarActive(false);
          }}
        ></button>
      </div>
    </div>
  );
}
