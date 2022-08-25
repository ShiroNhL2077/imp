const btn = document.getElementById("btn");
const btnLabel = document.getElementById("btn-label");
const link = document.getElementById("link");
const link1 = document.getElementById("link1");
const nav = document.getElementById("nav");
const main = document.getElementById("main");
const waifu = document.getElementById("waifu");

btn.addEventListener("click", toggle);

function toggle() {
  toggleLabel();
  toggleDarkLightNav();
  toggleDarkLightMain();
  toggleWaifu();
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

//   function awkwardError () {
//     console.log('That error was awkward and confusing')
//   }
//   awkwardError()
