const MenuBtn = document.querySelector(".menu")
const NavBtn = document.querySelector(".navlist")
MenuBtn.addEventListener("click" ,() =>{
    NavBtn.classList.toggle("active")
})

ScrollReveal({
    // reset:true,
    distance: "60px",
    duration: 2500,
    delay: 400,
  });
  ScrollReveal().reveal(
    " ",
    {
      delay: 500,
      origin: "left",
      interval: 200,
    }
  );
  ScrollReveal().reveal(".border , .fpost  , .footer  ", {
    delay: 600,
    origin: "top",
    interval: 200,
  });
  ScrollReveal().reveal(".service-title , .p, .info-title", { delay: 600, origin: "left" });
  ScrollReveal().reveal(".copyright", {
    delay: 500,
    origin: "top",
    interval: 200,
  });
  ScrollReveal().reveal("log", {
    delay: 500,
    origin: "bottom",
    interval: 200,
  });