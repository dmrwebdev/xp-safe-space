export default function CommandBar() {
  return (
    <>
      <div id="menu-bar">
        {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((item) => (
          <div className="menu-bar-action" key={item}>
            {item}
          </div>
        ))}
        <img id="xp-logo" src="images/xp_logo.jpg" alt="Windows XP Logo" />
      </div>

      <div id="address-bar">
        <div>Address</div>
        <input
          type="text"
          placeholder="https://www.developwithderek.com/projects/xp-md-previewer"
        />
        <div id="go-btn-container">
          <img id="xpGoButton" src="images/xpGoButton.png" alt="XP Go Button" />
          <p>Go</p>
        </div>
        {/* <button>Go</button> */}
      </div>
    </>
  );
}
