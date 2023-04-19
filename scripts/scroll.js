scrollApears = document.getElementsByClassName("scroll-appear");

for(scrollApear of scrollApears){
    scrollApear.checkPosition = function(){
        rect = scrollApear.getBoundingClientRect();
        if(rect.top >= window.innerHeight*.15 && rect.top < window.innerHeight*.85){
            this.classList.add("scroll-has-appeared")
        }
    }
    scrollApear.checkPosition();
}

scrollBackgrounds = document.getElementsByClassName("scroll-bg-change");
for(scrollBackground of scrollBackgrounds){
    scrollBackground.checkPosition = function(){
        rect = scrollBackground.getBoundingClientRect();
        if(rect.bottom >= window.innerHeight*.5 && rect.top < window.innerHeight*.5){
            
            this.classList.add("scroll-in-view");
        } else {
            this.classList.remove("scroll-in-view");
        }
    }
    scrollBackground.checkPosition();
}


document.addEventListener("scroll", (event) => {
    for(scrollApear of scrollApears){
        scrollApear.checkPosition();
    }
    for(scrollBackground of scrollBackgrounds){
        scrollBackground.checkPosition();
    }
    setBodyColorFromFirstScrollInView();
});


scrollInViews = document.getElementsByClassName("scroll-in-view");
function setBodyColorFromFirstScrollInView()
{
    color = null;
    if (scrollInViews[0]) {
        color = scrollInViews[0].getAttribute("data-scroll-bg-color");
    }
    document.body.style.backgroundColor = color;
}