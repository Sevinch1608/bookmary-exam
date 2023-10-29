const control = document.getElementsByClassName("control");
const image = document.getElementById("image");
const heading = document.getElementById("heading");
const paragraph = document.getElementById("paragraph");

control[0].onclick = function(){
    image.src = "images/illustration-features-tab-1.png";
    heading.innerHTML = "Bookmark in one click";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
}

control[1].onclick = function(){
    image.src = "images/illustration-features-tab-2.png";
    heading.innerHTML = "Intelligent search";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
}

control[2].onclick = function(){
    image.src = "images/illustration-features-tab-3.png";
    heading.innerHTML = "Share your bookmarks";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
}


function remove(){
    for (a of control){
        a.classList.remove("active");
    }
}


const controls = document.getElementsByClassName("text");
const dropMenu = document.getElementsByClassName("drop-down-text");
const afterText = document.getElementsByClassName("after-text");
const beforeTest = document.getElementsByClassName("before-text");


controls[0].onclick = function(){
    if(dropMenu[0].style.display == "none"){
        dropMenu[0].style.display = "block";
        afterText[0].style.display = "block";
        beforeTest[0].style.display = "none";
    }
    else{
        dropMenu[0].style.display = "none";
        afterText[0].style.display = "none";
        beforeTest[0].style.display = "block";
    }
}

controls[1].onclick = function(){
    if(dropMenu[1].style.display == "none"){
        dropMenu[1].style.display = "block";
        afterText[1].style.display = "block";
        beforeTest[1].style.display = "none";
    }
    else{
        dropMenu[1].style.display = "none";
        afterText[1].style.display = "none";
        beforeTest[1].style.display = "block";
    }
}

controls[2].onclick = function(){
    if(dropMenu[2].style.display == "none"){
        dropMenu[2].style.display = "block";
        afterText[2].style.display = "block";
        beforeTest[2].style.display = "none";
    }
    else{
        dropMenu[2].style.display = "none";
        afterText[2].style.display = "none";
        beforeTest[2].style.display = "block";
    }
}

controls[3].onclick = function(){
    if(dropMenu[3].style.display == "none"){
        dropMenu[3].style.display = "block";
        afterText[3].style.display = "block";
        beforeTest[3].style.display = "none";
    }
    else{
        dropMenu[3].style.display = "none";
        afterText[3].style.display = "none";
        beforeTest[3].style.display = "block";
    }
}


function validateForm() {
    let email = document.getElementById("email");
    let alert = document.getElementById("alert");
    let form = document.getElementById("formbox");
    let error = document.getElementById("img");

    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/; 

    if (email.value.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        email.style.borderTop = "2px solid rgb(83, 104, 223)";
        email.style.borderLeft = "2px solid rgb(83, 104, 223)";
        email.style.borderRight = "2px solid rgb(83, 104, 223)";
        email.style.borderBottom = "25px solid rgb(83, 104, 223)";
        alert.innerHTML = " "; 
        error.style.opacity = "0";
        document.getElementById("formbox").reset();
        return true
    }

    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        email.style.borderTop = "2px solid rgb(250, 87, 87)"; 
        email.style.borderLeft = "2px solid rgb(250, 87, 87)";
        email.style.borderRight = "2px solid rgb(250, 87, 87)";
        email.style.borderBottom = "25px solid rgb(250, 87, 87)";
        alert.innerHTML = "Whoops, make sure it's an email";
        error.style.opacity = "1";
        return false
    }
}


const menu = document.getElementById("mobileNav");
const button = document.getElementById("mobileMenu");
const logo = document.getElementById("logo");

menu.style.display = "none";

button.onclick = function() {
    if (menu.style.display == "none"){
        menu.style.display = "block";
        button.src = "images/icon-close.svg";
        logo.style.filter = "invert(1) brightness(50)";
        button.style.filter = "invert(0)";
    }
    else{
        menu.style.display = "none"
        button.src = "images/icon-hamburger.svg";
        logo.style.filter = "invert(0)";
    }
}
