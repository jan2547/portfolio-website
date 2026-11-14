// get the project section and arrow buttons
const projectGrid = document.querySelector(".project-grid");
const leftButton = document.getElementById("scroll-left");
const rightButton = document.getElementById("scroll-right");

// scroll left
leftButton.addEventListener("click", function() {
    projectGrid.scrollBy({
        left: -projectGrid.clientWidth,
        behavior: "smooth"
    });
});

// scroll right
rightButton.addEventListener("click", function() {
    projectGrid.scrollBy({
        left: projectGrid.clientWidth,
        behavior: "smooth"
    });
});

