document.addEventListener("DOMContentLoaded",function (){
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link){
        link.addEventListener("click",function(event){
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
             window.scrollTo({
                top:targetSection.offsetTop,
                behavior: "smooth"



             });
           
                
            });

        })


    });

var typed = new Typed(".text",{
strings:["Devesh Kumar Singh"],
typeSpeed:100,
backSpeed:100,
backDelay:100,
loop:true

});