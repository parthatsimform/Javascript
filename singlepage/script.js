home = document.getElementById("home");
about = document.getElementById("about");
images = document.getElementById("images");
services = document.getElementById("services");
content = document.getElementsByClassName("content");
selected = document.getElementsByClassName("navbar");

window.addEventListener("load", (e) => {            //When window load after refresh, it will show content based what URL is.
    fetchContent(e.target.location.hash)
})

Array.from(selected).forEach(ele => {                       //When we click on buttons, it will show content based on URL.
    ele.addEventListener("click", (e) => {
        fetchContent(e.target.attributes.href.nodeValue);
    })
})

function fetchContent(e) {
    switch(e) {

        case "#":
            home.style.display = "block";
            about.style.display = "block";
            images.style.display = "none";
            services.style.display = "none";
            break;
        
        case "#about":
            home.style.display = "none";
            about.style.display = "block";
            images.style.display = "none";
            services.style.display = "none";
            break;
        
        case "#images":
            home.style.display = "none";
            about.style.display = "none";
            images.style.display = "block";
            showSlide(slideindex);              //to display only one image at a time for first time
            services.style.display = "none";
            break;
        
        case "#services":
            home.style.display = "none";
            about.style.display = "none";
            images.style.display = "none";
            services.style.display = "block";
            break;
        
        case "":
            home.style.display = "block";
            about.style.display = "block";
            images.style.display = "none";
            services.style.display = "none";
            break;
        
        default:
            break;
    }
}

slider = document.getElementsByClassName("imgslide");
slideindex = 0;
slider[slideindex].style.display = "block";

function showSlide(slideindex) {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }    
    slider[slideindex].style.display = "block";
}

function changeslide(num) {
    if (slideindex == 0) {
        slideindex = slider.length;     //To overcome the error of edge case
    }
    slideindex = (slideindex + num) % slider.length;  //Here direct used num as -1 for left and +1 for right.
    showSlide(slideindex);
}