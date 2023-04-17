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

document.addEventListener("scroll", (event) => {
    for(scrollApear of scrollApears){
        scrollApear.checkPosition();
    }
});