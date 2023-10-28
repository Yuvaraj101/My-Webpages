
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

// toggle button to open sidebar
var menuBtn = document.getElementById("nav-menu-toggle")
var sidebar = document.querySelector(".sidebar")
var count = 0
menuBtn.addEventListener("click",function()
{
    count = count + 1
    if (count == 1)
    {

        sidebar.style.marginLeft = "0" + "vw"
        count = 0
    }
    
    if (count == 0)
    {
        sidebar.style.marginLeft = "-" + "100" + "vw"
    }
})