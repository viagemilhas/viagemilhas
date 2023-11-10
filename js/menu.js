function showMenu(){
    let menu = document.getElementsByClassName("mobile-links");
    if(menu[0].style.display == "none"){
      menu[0].style.display = "block";
    } else {
      menu[0].style.display = "none";
    }
    
  }