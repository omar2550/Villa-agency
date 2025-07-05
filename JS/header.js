const nav = document.querySelector("header nav");

window.onscroll = () => {
  if (window.scrollY > document.querySelector("header").offsetHeight) {
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.boxShadow = "0 0 10px 1px rgba(0, 0, 0, 0.2)";
  } else {
    nav.style.position = "relative";
    nav.style.boxShadow = "none";
  }
};
