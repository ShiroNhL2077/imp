import { useState } from "react";
import "./App.css";
import darkWaifu from "./assets/darkWaifu.jpg";
import lightWaifu from "./assets/lightWaifu.jpg";

function App() {

  const btn = document.getElementById("btn");
  const btnLabel = document.getElementById("btn-label");
  const link = document.getElementById("link");
  const link1 = document.getElementById("link1");
  const nav = document.getElementById("nav");
  const main = document.getElementById("main");
  const waifu = document.getElementById("waifu");

  // const [Label, setLabel] = useState("🌙");

  function toggle() {
    // toggleLabel();
    toggleDarkLightNav();
    toggleDarkLightMain();
    toggleWaifu();
    toggleLabel();
  }

  // console.log(waifu)

  function toggleDarkLightNav() {
    btn.classList.toggle("dark-btn");
    link.classList.toggle("dark-link");
    link1.classList.toggle("dark-link");
    nav.classList.toggle("dark-nav");
    btn.classList.toggle("light-btn");
    link.classList.toggle("light-link");
    link1.classList.toggle("light-link");
    nav.classList.toggle("light-nav");
  }

  function toggleLabel() {
    btnLabel.innerHTML === "🌙"
      ? (btnLabel.innerHTML = "🔅")
      : (btnLabel.innerHTML = "🌙");
  }

  function toggleDarkLightMain() {
    main.classList.toggle("dark-main");
    main.classList.toggle("light-main");
  }

  function toggleWaifu() {
    let atr = waifu.getAttribute("src");
    atr === "./assets/darkWaifu.jpg"
      ? waifu.setAttribute("src", "./assets/lightWaifu.jpg")
      : waifu.setAttribute("src", "./assets/darkWaifu.jpg");
    waifu.classList.toggle("dark-waifu");
    waifu.classList.toggle("light-waifu");
  }

  return (
    <div className="App">
      <div>
        <nav className="dark-nav" id="nav">
          <div className="nav--links">
            <div className="nav--brand">
              <img src="../logo.png" />
            </div>
            <a href="#" className="link dark-link" id="link">
              Home
            </a>
            <a href="#" className="link dark-link" id="link1">
              About
            </a>
          </div>
          <button className="btn dark-btn" id="btn" onClick={toggle()}>
            <span id="btn-label">🌙</span>
          </button>
        </nav>
        <main className="dark-main" id="main">
          <img
            src={darkWaifu}
            className="dark-waifu"
            alt="My dark waifu"
            id="waifu"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
