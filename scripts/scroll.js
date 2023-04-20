scrollApears = document.getElementsByClassName("scroll-appear");

for(scrollApear of scrollApears){
    scrollApear.checkPosition = function(){
        rect = scrollApear.getBoundingClientRect();
        if(rect.height > window.innerHeight*.7){
            this.classList.add("scroll-too-big");
        }
        if(rect.top >= window.innerHeight*.15 && rect.bottom < window.innerHeight*.85){
            this.classList.add("scroll-has-appeared")
        }
    }
    scrollApear.checkPosition();
}

scrollBgChanges = document.getElementsByClassName("scroll-bg-change");
for(scrollBgChange of scrollBgChanges){
    scrollBgChange.checkPosition = function(){
        rect = scrollBgChange.getBoundingClientRect();
        if(rect.bottom >= window.innerHeight*.5 && rect.top < window.innerHeight*.5){
            
            this.classList.add("scroll-in-view");
        } else {
            this.classList.remove("scroll-in-view");
        }
    }
    scrollBgChange.checkPosition();
}


document.addEventListener("scroll", (event) => {
    for(scrollApear of scrollApears){
        scrollApear.checkPosition();
    }
    for(scrollBgChange of scrollBgChanges){
        scrollBgChange.checkPosition();
    }
    setBodyColorFromFirstScrollInView();
});


scrollInViews = document.getElementsByClassName("scroll-in-view");
scrollBgs = document.getElementsByClassName("scroll-bg");
function setBodyColorFromFirstScrollInView()
{
    color = null;
    if (scrollInViews[0]) {
        color = scrollInViews[0].getAttribute("data-scroll-bg-color");
    }
    for(scrollBg of scrollBgs){
        scrollBg.style.setProperty('--bg-color', color);
    }
}