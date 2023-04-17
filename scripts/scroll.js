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
        console.log(rect.top);
        if(rect.top >= -window.innerHeight*.5 && rect.top < window.innerHeight*.5){
            //console.log("ehhho");
            document.body.style.backgroundColor = this.getAttribute("scroll-bg-color");
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
});