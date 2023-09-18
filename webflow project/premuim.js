const get = document.querySelectorAll(".get")
const suscribeBtn = document.querySelector(".suscribe-btn")
const cartBtn = document.querySelector("cart-btn")

suscribeBtn.addEventListener("click", function(){
    suscribeBtn.classList.toggle("purchase")
    get.forEach( function(button){
        button.classList.toggle("purchase")
    })
})