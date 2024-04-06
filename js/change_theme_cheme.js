alert("Activado");
const themequery = window.matchMedia('(prefers-color-scheme: dark)');
const button_toggle = document.querySelector(".button_switch");
var content = document.getElementById("content_toggle");

var updatevalue_schema = (dark) => {
    if(dark){
        button_toggle.setAttribute("style","background-image: url('../images/light.png');");
    }else{
        button_toggle.setAttribute("style","background-image: url('../images/dark.png');");
    }
}

updatevalue_schema(themequery.matches);

themequery.addEventListener('change', () => {
    updatevalue_schema(themequery.matches);
});



/*button_toggle.addEventListener('onClick', () => {
    if(dark){
        alert(dark);
        button_toggle.setAttribute("style","background-image: url('../images/light.png');");
    }else{
        alert(dark);
        button_toggle.setAttribute("style","background-image: url('../images/dark.png');");
    }
});*/
