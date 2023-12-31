
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
    clearInterval(myInterval)


})

sliderLeftBtn.addEventListener("click",function()
{
    margin = margin - 100
    if (margin < 0){
        margin = 200
    }
    slider.style.marginLeft = "-" + margin + "vw"
    clearInterval(myInterval)
})

//slider timed function

const myInterval = setInterval(() => {
    
    margin = margin + 100
    if (margin > 200)
    {
        margin = 0
    }
    slider.style.marginLeft = "-" + margin +"vw"
    
}, 5000);

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
        
    }
    
    else if (count == 2)
    {
        sidebar.style.marginLeft = "-" + "100" + "vw"
        count = 0
    }
})

//sidebar
var cancelBtn = document.getElementById("sidebar-cancel")
cancelBtn.addEventListener("click",function()
{
    sidebar.style.marginLeft = "-" + "100vw"
})

//like and unlike toggle
var redHeart = document.querySelectorAll("#blackHeart")

redHeart.forEach(function(btn)
{
    btn.addEventListener("click",function(e)
    {
        if (e.target.src.indexOf("blackheart") > 0)
        {
            e.target.src = "img/icons/redheart.png"
        }
        else{
            e.target.src = "img/icons/blackheart.png"
        }

    })
})

// overlay effect when hover on the button 
var shopBtn = document.querySelectorAll("#shopBtn")

var outfitImg = document.querySelectorAll("#outfit-img")

shopBtn.forEach(function(btn)
{
    btn.addEventListener("mouseover",function(e)
    {
        outfit = e.target.previousSibling.parentNode.previousSibling.previousElementSibling;
        outfit.style.opacity = "0.6";
    })

    btn.addEventListener("mouseout",function(e)
    {
        outfit = e.target.previousSibling.parentNode.previousSibling.previousElementSibling
        outfit.style.opacity = "1.0"
    })

})

