let navbar = document.querySelector(".navbar");
let showstiky = document.querySelector(".practicing");
let go_top = document.querySelector(".go-top");
let nav_scroll = (window.onscroll = () => {
  if (window.scrollY >= showstiky.offsetTop + 2) {
    navbar.style.cssText =
      "position:fixed ; animation: show-nav .3s linear; top:10px";
  } else {
    navbar.style.cssText = "position :absolute";
  }
  if (window.scrollY == 0) {
    navbar.style.cssText = "animation: show-nav-0px .3s linear;";
  }
});
// go to button
window.addEventListener("scroll", () => {
  if (window.scrollY >= showstiky.offsetTop) {
    go_top.style.cssText = "display:flex";
  } else {
    go_top.style.cssText = "display:none";
  }
});
go_top.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});
//form validation
let name = document.querySelector(".name");
let phone = document.querySelector(".phone");
let select = document.querySelector(`[name="selector"]`);
let email = document.querySelector(".email");
let text_area = document.querySelector("textarea");
function valid(elment) {
  if (elment.value.length == 0) {
    elment.nextElementSibling.textContent = `${elment.getAttribute("mess")}`;
  } else if (elment == select) {
    let helper_check = "";
    helper_check = select.value;
    if (helper_check == "" || helper_check == "Health Law")
      select.nextElementSibling.textContent = `${select.getAttribute("mess")}`;
  }
}
function el(elment) {
  elment.addEventListener("blur", () => {
    if (elment.value.length == 0) {
      elment.nextElementSibling.textContent = `${elment.getAttribute("mess")}`;
    } else if (elment == select) {
      let helper_check = "";
      helper_check = select.value;
      if (helper_check == "" || helper_check == "Health Law")
        select.nextElementSibling.textContent = `${select.getAttribute(
          "mess"
        )}`;
    }
  });
}
function el_focus(elment) {
  elment.addEventListener("focus", () => {
    elment.nextElementSibling.textContent = ``;
  });
}
function call_blur() {
  el(name);
  el(phone);
  el(email);
  el(text_area);
  el(select);
}
function call_focus() {
  el_focus(name);
  el_focus(phone);
  el_focus(email);
  el_focus(text_area);
  el_focus(select);
}
call_blur();
call_focus();
let submit = document.querySelector(`.form-submit`);
submit.addEventListener("click", () => {
  valid(name);
  valid(email);
  valid(phone);
  valid(select);
  valid(text_area);
  let valid_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email.value.match(valid_email)
    ? ""
    : email.value.length == 0
    ? ""
    : (email.nextElementSibling.textContent = `un valid email`);
});
// get year
window.onload = () => {
  let date = new Date();
  document.querySelector(".footer-year").textContent = date.getFullYear();
};
