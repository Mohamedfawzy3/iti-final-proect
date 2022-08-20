let navbar = document.querySelector(".navbar");
let showstiky = document.querySelector(".practicing");
let go_top=document.querySelector(".go-top")
let nav_scroll = (window.onscroll = () => {
  if (window.scrollY >= showstiky.offsetTop + 2) {
    navbar.style.cssText = "position:fixed ; animation: show-nav .3s linear; top:10px";
  } else {
    navbar.style.cssText = "position :absolute";
  }
  if (window.scrollY == 0) {
    navbar.style.cssText = "animation: show-nav-0px .3s linear;";
  }
})
// go to button
window.addEventListener("scroll",()=>{
    if (window.scrollY >= showstiky.offsetTop ){
        go_top.style.cssText="display:flex"
        }
        else {
          go_top.style.cssText="display:none"
        }
});
go_top.addEventListener("click",()=>{
    window.scrollTo({top:0,})
})