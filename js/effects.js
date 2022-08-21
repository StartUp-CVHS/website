document.querySelector("#home").addEventListener('click', scrollpage0);
document.querySelector("#aboutus").addEventListener('click', scrollpage1);
document.querySelector("#scroll").addEventListener('click', scrollpage1);
document.querySelector("#aboutusb").addEventListener('click', scrollpage1);

document.getElementById("home").style.color = "#7a0dd3";

function scrollpage1() {
     window.scrollTo(0, window.innerHeight - 80);
}

function scrollpage0() {
     window.scrollTo(0,0);
}
window.addEventListener("scroll", function(event){
     var scroll = this.scrollY
     
     
     if(scroll == 0){  
          document.getElementById("home").style.color = "#7a0dd3";
          document.getElementById("aboutus").style.color = "#000000";

     }else if( scroll >= window.innerHeight-80){
          
          document.getElementById("home").style.color = "#000000";
          document.getElementById("aboutus").style.color = "#7a0dd3";
     }
}) 
