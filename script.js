// Typing effect for the title
const titleElement = document.getElementById('dynamic-title');
const titleLines = ["Ammar Elhamamy", "Financial Engineering | AI/ML"];
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


document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector(".grid-container");


// create 16 x 16 grid

for (let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add('grid-box');
    gridContainer.appendChild(div);



//add hover effect
div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = getNextColor(div); 
        });
    }
});

function getNextColor(element){
    const colors = ["white", "green", "navy"];
    const currentColor = element.style.backgroundColor;
    const nextColor = colors[(colors.indexOf(currentColor)+ 1) % colors.length]
    return nextColor
}

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

document.getElementById('car-price').querySelector('.project-btn').addEventListener('click', function() {
    window.open("")
})



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
