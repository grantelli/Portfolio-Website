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


// Intersection Observer for the About section
const aboutSection = document.querySelector('.about');
const aboutImg = document.querySelector('.about-img');
const aboutContent = document.querySelector('.about-content');

const options = {
    threshold: 0.1  // trigger when 10% of section is visible
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutImg.classList.add('animate');
            aboutContent.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing after animation is done
        }
    });
}, options);

observer.observe(aboutSection);


// Intersection Observer for the Skills section
const skillsSection = document.querySelector('.skills');
const skillsOptions = {
    threshold: 0.2
};

const skillsObserver = new IntersectionObserver(function(entries, skillsObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillsSection.classList.add('animate');
            skillsObserver.unobserve(entry.target); // Stop observing after animation is done
        }
    });
}, skillsOptions);

skillsObserver.observe(skillsSection);

  
  