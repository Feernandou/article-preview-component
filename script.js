document.addEventListener("DOMContentLoaded",function(){
    const btn = document.getElementById("icon-share")
    const desktop = document.getElementById("shareDesktop")
    const mobile = document.getElementById("shareMobile")
    
    btn.addEventListener("click",function(){
        const pantalla = window.innerWidth
        if(pantalla > 900){
            if(desktop.style.display === "flex"){
                desktop.style.display = "none"
            }else{
                desktop.style.display = "flex"
                mobile.style.display = "none"
            }
        }else{
            if(mobile.style.display === "flex"){
                mobile.style.display = "none"
                
            }else{
                mobile.style.display = "flex"
                desktop.style.display = "none"
            }
        }
    })
})