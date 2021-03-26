function burger(){
    
    var menu = document.querySelector('main-nav')
    if (menu.style.display ==! "flex") 
    {
        menu.style.display = "flex";
     } 
     else
    {
        menu.style.display = "none";
     }
}
