var content = document.getElementById("content_toggle");
var body = document.querySelector("body");
var parrafos = document.querySelector("p");
var servicios = document.getElementById("con_service");
var btn_toggle = document.querySelector(".button_switch");
var producto = document.getElementById("jump_content");
content.onclick = function(){
    content.classList.toggle('active_toggle');
    body.classList.toggle('active_theme_dark');
    parrafos.classList.toggle('active_theme_dark');
    servicios.classList.toggle('active_theme_dark');
    producto.classList.toggle('active_theme_dark');
    btn_toggle.classList.toggle('img_dark');
}
