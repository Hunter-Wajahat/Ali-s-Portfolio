// Mobile menu toggle functionality
document.querySelector("#sideBarIcon").addEventListener("click", () => {
    const sideBar = document.querySelector(".sideBar");
    sideBar.classList.toggle("active");
});

// Close menu when clicking on a menu item (for mobile)
const menuItems = document.querySelectorAll(".sideBar a");
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const sideBar = document.querySelector(".sideBar");
        if (window.innerWidth <= 540) {
            sideBar.classList.remove("active");
        }
    });
});

// Image circle animation
const imagecircle = document.querySelector(".imgcircle");
// When Mouse Enters, Start Animation
imagecircle.addEventListener("mouseenter",() => {
    imagecircle.classList.add("rotate");
    if (document.querySelector(".massege")) {
        document.querySelector(".massege").src = "resources/second msg.png";
    }
    if (document.querySelector(".massege2")) {
        document.querySelector(".massege2").style="opacity: 0;";
    }
});

// To Stop Rotation, Use Any Event (Example: Double Click)
imagecircle.addEventListener("dblclick",() => {
    imagecircle.classList.remove("rotate");
    if (document.querySelector(".massege2")) {
        document.querySelector(".massege2").style="opacity: 1;";
    }
});

// Handle window resize events
window.addEventListener('resize', () => {
    const sideBar = document.querySelector(".sideBar");
    if (window.innerWidth > 540 && sideBar.classList.contains("active")) {
        sideBar.classList.remove("active");
    }
});

// Smooth scroll to top
//about section
document.querySelector("#about").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector(".secondSection").offsetTop,
        behavior: "smooth"
    });
});

//skill section
document.querySelector("#skill").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector(".thirdSection").offsetTop,
        behavior: "smooth"
    });
});

//blog section
document.querySelector("#blog").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector(".blog").offsetTop,
        behavior: "smooth"
    });
});

//contact section
document.querySelector("#contact").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector(".contact").offsetTop,
        behavior: "smooth"
    });
});

