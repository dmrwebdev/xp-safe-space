import xpLogo from '../assets/xp-logo.jpg';
import goButton from '../assets/xp-go-button.png';

export default function CommandBar() {
  return (
    <>
      <div id="menu-bar">
        {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((item) => (
          <div className="menu-bar-action" key={item}>
            {item}
          </div>
        ))}
        <img id="xp-logo" src={xpLogo} alt="Windows XP Logo" />
      </div>

      <div id="address-bar">
        <div>Address</div>
        <input
          type="text"
          placeholder="https://www.developwithderek.com/projects/xp-md-previewer"
        />
        <div id="go-btn-container">
          <img id="xpGoButton" src={goButton} alt="XP Go Button" />
          <p>Go</p>
        </div>
        {/* <button>Go</button> */}
      </div>
    </>
  );
}
