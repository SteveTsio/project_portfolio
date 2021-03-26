function burger(){
    
    var menu = document.getElementsByClassName('main-nav')
    if (menu.style.display ==! "flex") 
    {
        menu.style.display = "flex";
     } 
     else
    {
        menu.style.display = "none";
     }
}
