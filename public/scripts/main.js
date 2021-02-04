let btn = document.querySelector(".burger");
let acct_info;
btn.addEventListener("click", (e) => {
  acct_info = document.querySelector(".acct-info-side");
  let offset = acct_info.getBoundingClientRect().left;
  if (offset < 0) {
    acct_info.style.transform = "translateX(412px)";
    acct_info.classList.toggle("acct-info-shadow");
  } else {
    acct_info.style.transform = "translateX(-412px)";
    acct_info.classList.toggle("acct-info-shadow");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1500) {
    acct_info = document.querySelector(".acct-info-side");
    let offset = acct_info.getBoundingClientRect().left;
    console.log(offset);
    if (offset === 0) {
      acct_info.style.transform = "translateX(-412px)";
      acct_info.classList.toggle("acct-info-shadow");
    }
  }
});
