var typed = new Typed(".positions", {
    strings: ["Software Engineer", "CS Major @ Iowa State", "Fullstack Developer", "Creator"],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1500,
    loop: true
});

// Toggle the visibility of the navbar and adjust the layout on hamburger menu click
document.getElementById("menu-icon").addEventListener("click", function() {
    const navbar = document.querySelector(".navbar");
    const home = document.querySelector(".home"); // Select the rest of the content
    
    navbar.classList.toggle("active");
  
    // Dynamically adjust the margin-top of the home section based on navbar state
    if (navbar.classList.contains("active")) {
      home.style.marginTop = `${navbar.scrollHeight}px`; // Push the home section down by the navbar height
    } else {
      home.style.marginTop = "0"; // Reset when the menu is closed
    }
  });
  
  