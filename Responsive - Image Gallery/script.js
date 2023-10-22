img = document.querySelectorAll(".box")

// console.log(img);

window.addEventListener("scroll",function(){

    height = window.innerHeight

    img.forEach(function(el)
    {
        // console.log(el);
        var boxy = el.getBoundingClientRect().top
        if (boxy > height){
            el.style.opacity = 0
            el.style.transform = "scale(0.9)"

        }
        if (boxy < height){
            el.style.opacity = 1
            el.style.transform = "scale(0.9)"
        }
    })
    
    // var boxy = img.getBoundingClientRect().top

})

var like = document.querySelectorAll("#like")
var wishlist = document.getElementById("wishlist")

var likeCount = 0
like.forEach(function(el)
{
    el.addEventListener("click",function()
    {

        if (el.style.color === "red")
        {
            el.style.color = "grey"
            likeCount = likeCount - 1
            wishlist.innerHTML = likeCount
        }
        
        else
        {
            el.style.color = "red"
            likeCount = likeCount + 1
            wishlist.innerHTML = likeCount

        }
    })
})


var menu = document.getElementById("menu")
menu.addEventListener("click",function()
{
    console.log("dsf");
})

var sidebar = document.querySelector(".sidebar")
var menu = document.getElementById("menu")
var cancel = document.getElementById("cancel")

menu.addEventListener("click",function()
{
    sidebar.style.marginLeft = "0"
})

cancel.addEventListener("click",function()
{
    sidebar.style.marginLeft = "-100" + "%"
})

var wishlist = document.getElementById("wishlist")
wishlist.addEventListener("click",function()
{
    console.log("test");
})

