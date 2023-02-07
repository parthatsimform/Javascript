home = document.getElementById("home");
about = document.getElementById("about");
images = document.getElementById("images");
services = document.getElementById("services");
content = document.getElementById("content");
selected = document.getElementsByClassName("navbar");
slider = document.getElementsByClassName("imgslide");
slideindex = 0;

window.addEventListener("load", async (e) => {
    const res = await fetch(routes[e.target.location.hash]);
    const data = await res.text();
    content.innerHTML = data;
    if (e.target.location.hash == "#images") {
        for (let i = 0; i < slider.length; i++) {
            slider[i].style.display = "none";
        }
        slider[0].style.display = "block";
    }
})

window.addEventListener("popstate", async (e) => {
    const res = await fetch(routes[e.target.location.hash]);
    const data = await res.text();
    content.innerHTML = data;
    if (e.target.location.hash == "#images") {
        for (let i = 0; i < slider.length; i++) {
            slider[i].style.display = "none";
        }
        slider[0].style.display = "block";
    }
})

const routes = {
    "": "./pages/home.html",
    "#": "./pages/home.html",
    "#about": "./pages/about.html",
    "#images": "./pages/images.html",
    "#services": "./pages/services.html",
}

Array.from(selected).forEach(ele => {                       //When we click on buttons, it will show content based on URL.
    ele.addEventListener("click", async (e) => {
        const res = await fetch(routes[e.target.attributes.href.nodeValue]);
        const data = await res.text();
        content.innerHTML = data;
        if (e.target.attributes.href.nodeValue == "#images") {
            for (let i = 0; i < slider.length; i++) {
                slider[i].style.display = "none";
            }
            slider[0].style.display = "block";
        }
    })
})

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
function scrollFun() {
    document.querySelector("#about").scrollIntoView(true,{behaviour: "smooth"});
}