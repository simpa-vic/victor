const topnav = document.getElementById('header');
const con = document.getElementById('toggle')
const tainer = document.getElementById('tainer')

topnav.style.width = "0vw";

con.addEventListener('click',()=>{
    if(topnav.style.width =="0vw")
    {
        topnav.style.width = "100vw";
        tainer.style.height = "100vh";
        tainer.style.overflow = "hidden";
    }
    else{
        topnav.style.width = "0vw";
        tainer.style.height = "auto";
        tainer.style.overflow = "auto";
    }
})