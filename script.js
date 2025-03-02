// Typing effect for the title
const titleElement = document.getElementById('dynamic-title');
const titleLines = ["Ammar Elhamamy", "Financial Engineering | Data Science"];
let lineIndex = 0;
let charIndex = 0;


function typeEffect() {
    if (lineIndex < titleLines.length) {
        if (charIndex < titleLines[lineIndex].length) {
            titleElement.innerHTML += titleLines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 40);
        } else {
            titleElement.innerHTML += "<br>"; // Add a line break after each line
            lineIndex++;
            charIndex = 0; // Reset character index for the next line
            setTimeout(typeEffect, 500); // Add a small delay before starting the next line
        }
    }
}

typeEffect();

//16 x 16 grid background with hovering effects

document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");


    if (!container) {
        console.error("Error: .grid-container not found in the DOM!");
        return;  // Stop execution if container doesn't exist
    }

    console.log("Grid container found, adding boxes...");

    container.classList.add("grid-container");
    document.body.appendChild(container);

    const numRows = 50;
    const numCols = 50;
    const numSquares = numRows * numCols;

    for (let i = 1; i <= numSquares; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-cell");
        container.appendChild(div);
    }

    console.log("Grid boxes added:", document.querySelectorAll('.grid-box'));

    const gridCells = document.querySelectorAll(".grid-cell");
    const colors = ["#1A2A6C", "#FFFFFF", "#000000"]; // Navy, White, Black

    gridCells.forEach(cell => {
        let colorIndex = 0;
        cell.addEventListener("mouseenter", () => {
            console.log("Hover detected on a cell!");
            colorIndex = (colorIndex + 1) % colors.length;
            cell.style.backgroundColor = colors[colorIndex];
        });
    });
});


// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function() {
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listeners to project buttons for opening linked projects
document.getElementById('portfolio-opt').querySelector('.project-btn').addEventListener('click', function() {
    window.open('https://github.com/Ammaryasser1998/Portfolio-Optimization-Methods', '_blank');
});

document.getElementById('credit-risk').querySelector('.project-btn').addEventListener('click', function() {
    window.open('https://github.com/Ammaryasser1998/risk_segment_kmeans/tree/main', '_blank');
});





// LinkedIn button functionality
const linkedinURL = 'https://www.linkedin.com/in/ammar-yasser-32928a205/';

document.getElementById('linkedin-btn').addEventListener('click', function() {
    window.open(linkedinURL, '_blank');
});
// Learn More button scrolls to About section
const learnMoreBtn = document.getElementById('learn-more-btn');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
}

console.log('JavaScript is Running.')
