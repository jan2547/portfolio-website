// get the elements
const projectGrid = document.querySelector(".project-grid");
const projectTemplate = document.getElementById("project-template");
const leftButton = document.getElementById("scroll-left");
const rightButton = document.getElementById("scroll-right");


// my projects
const projects = [
    {
        name: "Autonomous Mini Rover",
        description: "An autonomous robot that detects obstacles and controls its motors using Arduino.",
        tags: ["Arduino", "C++", "Robotics"],
        image: null,
        video: null,
        github: "https://github.com/jan2547/Autonomous-Mini-Rover"
    },
    {
        name: "SproutFarm",
        description: "A 2D farming game built with Godot, featuring player movement and an interactive world.",
        tags: ["Godot", "GDScript"],
        image: null,
        video: null,
        github: "https://github.com/jan2547/SproutFarm-Public"
    },
    {
        name: "Sliding Puzzle",
        description: "A C++ sliding puzzle solver using A* search and the Manhattan-distance heuristic.",
        tags: ["C++", "A* Search", "Algorithms"],
        image: null,
        video: null,
        github: "https://github.com/jan2547/slidingPuzzle"
    },
    {
        name: "Minesweeper",
        description: "A C++ Minesweeper project with board generation and solver logic.",
        tags: ["C++", "Game Logic", "Algorithms"],
        image: null,
        video: null,
        github: "https://github.com/jan2547/MineSweeperProject"
    },
    {
        name: "Jumping Game",
        description: "....",
        tags: ["C++"],
        image: null,
        video: null,
        github: "https://github.com/jan2547/FinalProjectJumpingGame"
    },
    {
        name: "LC-3 CPU Emulator",
        description: "coming soon",
        tags: ["C++"],
        image: null,
        video: null,
        github: "null"
    },

];

// create a card for each project using template
function renderProjects() {

    projectGrid.replaceChildren();

    projects.forEach((project) => {

        // copy the card template
        const card = projectTemplate.content.firstElementChild.cloneNode(true);

        // add the project information
        card.querySelector(".project-name").textContent = project.name;
        card.querySelector(".project-description").textContent = project.description;

        // add the technology tags
        const techStack = card.querySelector(".tech-stack");

        project.tags.forEach((tech) => {
            const tag = document.createElement("span");
            tag.className = "tech-tag";
            tag.textContent = tech;
            techStack.appendChild(tag);
        });

        // add the github link
        const codeLink = card.querySelector(".code-link");

        if (project.github) {
            codeLink.href = project.github;
            codeLink.setAttribute("aria-label", `View code for ${project.name}`);
        } else {
            codeLink.remove();
        }

        //  use an image if the project has one
        if (project.image) {
            const img = document.createElement("img");

            img.src = project.image;
            img.alt = `Screenshot of ${project.name}`;
            img.loading = "lazy";
            img.className = "project-image";

            card.querySelector(".project-image").replaceWith(img);
        }

        // show a play button if the project has a video
        if (project.video) {

            // get the current image or placeholder
            const preview = card.querySelector(".project-image");

            // create a play button
            const playButton = document.createElement("button");
            playButton.type = "button";
            playButton.className = "project-play";
            playButton.setAttribute("aria-label", `Play ${project.name} demo`);

            // put the preview inside the button
            preview.replaceWith(playButton);
            playButton.appendChild(preview);

            // play the video when clicked
            playButton.addEventListener("click", () => {

                const video = document.createElement("video");

                video.className = "project-image";
                video.src = project.video;
                video.controls = true;
                video.playsInline = true;
                video.preload = "none";

                // replace the preview with the video
                playButton.replaceWith(video);

                // start playing
                video.play().catch(() => {
                    // built-in controls can still be used
                });
            });
        }

        // add the finished card to the grid
        projectGrid.appendChild(card);
    });
}

// show the projects
renderProjects();


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

