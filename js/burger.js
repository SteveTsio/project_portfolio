function burger(){
    
    var menu = document.getElementsByClassName('main-nav')
    console.log(menu);
    if (menu.style.display ==! "flex") 
    {
        menu.style.display = "flex";
     } 
     else
    {
        menu.style.display = "none";
     }
}
