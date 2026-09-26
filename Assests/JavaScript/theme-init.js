// get theme from local storage or OS
const SavedTheme = localStorage.getItem('data-theme');
const OsprefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let Theme = (OsprefersDark ? 'dark' : 'light');
if(SavedTheme){
     Theme = SavedTheme ;
}
document.documentElement.setAttribute('data-theme', Theme);
localStorage.setItem('data-theme', Theme);
function svgInvert(theme){
 document.querySelectorAll('[data-light][data-dark]').forEach(svg =>{
    svg.src = theme === 'dark' ? svg.dataset.dark : svg.dataset.light;
 })
}
document.addEventListener('DOMContentLoaded',function(){
    svgInvert(Theme);
    if(Theme === 'dark'){
           theme_Change_BTN.innerHTML = `<img src="Assests/Icons light/Dark mode theme icon.svg"  alt="">Dark mode`
       }
       else{
           theme_Change_BTN.innerHTML = `<img src="Assests/Icons light/Light mode theme icon.svg"  alt="">Light mode`
       }
})