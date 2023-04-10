import React from "react";

// Header function for information on MyPodcasts page
function Header() {
  return (
    <div className="App">
      <h1>My Podcasts</h1>
      <span style={{ fontSize: "20px" }}>
        Link to Baconsale Website!!! Click{" "}
        <a href="https://baconsale.com/" target="_blank" rel="noreferrer">
          here
        </a>
      </span>
    </div>
  );
}

export default Header;
