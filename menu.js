
let menu_open = false

function toggle_menu () {
    if (menu_open == false) {
        document.getElementById("nav-mob").style.display = "flex";
        document.getElementById("bar-left").style.rotate = "45deg"
        document.getElementById("bar-right").style.rotate = "-45deg"
        document.getElementById("bar-right").style.translate = "0 -10px"
        document.getElementById("bar-middle").style.display = "none"
        menu_open = true
    }
    else {
        document.getElementById("nav-mob").style.display = "none";
        document.getElementById("bar-left").style.rotate = "none"
        document.getElementById("bar-right").style.rotate = "none"
        document.getElementById("bar-right").style.translate = "none"
        document.getElementById("bar-middle").style.display = "block"
        menu_open = false
    }
}