document.querySelector("#home").addEventListener('click', scrollpage0);
document.querySelector("#aboutus").addEventListener('click', scrollpage1);
document.querySelector("#scroll").addEventListener('click', scrollpage1);
document.querySelector("#aboutusb").addEventListener('click', scrollpage1);
document.querySelector("#scroll2").addEventListener('click', scrollpage2);
document.querySelector("#meetinginfo").addEventListener('click', scrollpage2);

document.getElementById("home").style.color = "#7a0dd3";
function scrollpage0() {
     window.scrollTo(0, 0);
}
function scrollpage1() {
     window.scrollTo(0, window.innerHeight - 80);
}

function scrollpage2() {
     window.scrollTo(0, (2 * window.innerHeight - 160));
}
window.addEventListener("scroll", function (event) {
     var scroll = this.scrollY
     console.log(scroll)

     if (scroll == 0) {
          document.getElementById("home").style.color = "#7a0dd3";
          document.getElementById("aboutus").style.color = "#000000";

     } else if (scroll >= 1.23 * window.innerHeight - 80) {

          document.getElementById("aboutus").style.color = "#000000";
          document.getElementById("meetinginfo").style.color = "#7a0dd3";
     }else if (scroll >= window.innerHeight - 80) {
          document.getElementById("meetinginfo").style.color = "#000000";
          document.getElementById("home").style.color = "#000000";
          document.getElementById("aboutus").style.color = "#7a0dd3";
     }
     
})
