document.querySelector("#home").addEventListener('click', scrollpage0);
document.querySelector("#aboutus").addEventListener('click', scrollpage1);
document.querySelector("#aboutusb").addEventListener('click', scrollpage1);
document.querySelector("#meetinginfo").addEventListener('click', scrollpage2);
document.querySelector("#projectb").addEventListener('click', scrollpage3);
document.querySelector("#resourcesb").addEventListener('click', scrollpage4);
document.querySelector("#scroll").addEventListener('click', scrollpage1);
document.querySelector("#scroll2").addEventListener('click', scrollpage2);
document.querySelector("#scroll3").addEventListener('click', scrollpage4);
document.querySelector("#scrollup").addEventListener('click', scrollpage0);
document.querySelector("#scrollup2").addEventListener('click', scrollpage1);
document.querySelector("#scrollup3").addEventListener('click', scrollpage2);


document.getElementById("home").style.color = "#7a0dd3";
function scrollpage0() {
     window.scrollTo(0, 0);
     document.querySelector(".mnav").classList.toggle('nav-active')
}
function scrollpage1() {
     window.scrollTo(0, window.innerHeight - 80);
     document.querySelector(".mnav").classList.toggle('nav-active')
}
function scrollpage2() {
     window.scrollTo(0, (2 * window.innerHeight - 160));
     document.querySelector(".mnav").classList.toggle('nav-active')
} function scrollpage3() {
     window.scrollTo(0, (2.3 * window.innerHeight - 160));
     document.querySelector(".mnav").classList.toggle('nav-active')
} function scrollpage4() {
     window.scrollTo(0, (3 * window.innerHeight - 230));
     document.querySelector(".mnav").classList.toggle('nav-active')
}
window.addEventListener("scroll", function (event) {
     var scroll = this.scrollY
     
     if (scroll >= 3 * window.innerHeight - 400) {
          document.getElementById("projectb").style.color = "#000000";
          document.getElementById("resourcesb").style.color = "#7a0dd3";
     } else if (scroll >= 2.2 * window.innerHeight - 300) {
          document.getElementById("resourcesb").style.color = "#000000";
          document.getElementById("meetinginfo").style.color = "#000000";
          document.getElementById("projectb").style.color = "#7a0dd3";
     } else if (scroll >= 2 * window.innerHeight - 400) {
          document.getElementById("aboutus").style.color = "#000000";
          document.getElementById("projectb").style.color = "#000000";
          document.getElementById("meetinginfo").style.color = "#7a0dd3";
     } else if (scroll >= window.innerHeight - 400) {
          document.getElementById("meetinginfo").style.color = "#000000";
          document.getElementById("home").style.color = "#000000";
          document.getElementById("aboutus").style.color = "#7a0dd3";
     } else if (scroll >= 0) {
          document.getElementById("home").style.color = "#7a0dd3";
          document.getElementById("aboutus").style.color = "#000000";

     }

})
