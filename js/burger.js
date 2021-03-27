function burger(){
    
    var menu = document.getElementsByClassName('main-nav')

    if (menu[0].style.display != "flex") 
    {
        menu[0].style.display = "flex";
     } 
     else
    {
        menu[0].style.display = "none";
     }
}
