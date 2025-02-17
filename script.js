// Typing effect for the title
const titleElement = document.getElementById('dynamic-title');
const titleLines = ["Ammar Yasser", "Financial Engineering | Data Science"];
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
const linkedinURL = 'www.linkedin.com/in/ammar-yasser-32928a205';

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