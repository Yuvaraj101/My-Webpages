
var sliderLeftBtn = document.getElementById("slider-left-activate")
var sliderRightBtn = document.getElementById("slider-right-activate")

// slider container 
var slider = document.querySelector(".slider-image-container")

var margin = 0

sliderRightBtn.addEventListener("click",function()
{
    margin = margin + 100
    if (margin>200)
    {
        margin = 0 
    }
    slider.style.marginLeft = "-" + margin + "vw"


})

sliderLeftBtn.addEventListener("click",function()
{
    margin = margin - 100
    if (margin < 0){
        margin = 200
    }
    slider.style.marginLeft = "-" + margin + "vw"
})