let menu = document.getElementsByClassName('main-nav');
let width;
let height;
window.onresize = window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;
    if(width > 550){
        menu[0].style.display = "flex";
    }
}

function burger(){
    if(width <= 550){
        if (menu[0].style.display != "flex") 
        {
            menu[0].style.display = "flex";
        } 
         else
        {
            menu[0].style.display = "none";
        }
    }
}