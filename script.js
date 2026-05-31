let ownerName = "Hasan Mahmud";
let userName = "hasanm5583";

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = ownerName;
});

// Set GitHub links if elements exist
const githubLink = document.querySelector("#github");
const forkLink = document.querySelector("#fork");
if (githubLink) githubLink.href = "http://github.com/" + userName;
if (forkLink) forkLink.href = "http://github.com/" + userName + "/" + userName + ".github.io";

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-content')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}
