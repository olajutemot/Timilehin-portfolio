// JavaScript for opening and closing the portfolio overlay
const openPortfolioButton = document.getElementById("openPortfolio");
const closePortfolioButton = document.getElementById("closePortfolio");
const portfolioOverlay = document.getElementById("portfolioOverlay");
const projectButton = document.getElementById("projects-button");
const skillButton = document.getElementById("skills-button");
const skill = document.getElementById("skills");
const project = document.getElementById("projects");
const darkButton = document.querySelector(".fa-moon");
const lightButton = document.querySelector(".fa-sun");

// ==============================setting dark and light theme====================================
darkButton.addEventListener("click", () => {
  lightButton.style.display = "block";
  darkButton.style.display = "none";
  portfolioOverlay.classList.remove("lightmode");
  portfolioOverlay.classList.add("darkmode");
});
lightButton.addEventListener("click", () => {
  lightButton.style.display = "none";
  darkButton.style.display = "block";
  portfolioOverlay.classList.add("lightmode");
  portfolioOverlay.classList.remove("darkmode");
});

//===========================opening and closinf portfolio===================================
openPortfolioButton.addEventListener("click", () => {
  portfolioOverlay.style.display = "flex";
});

closePortfolioButton.addEventListener("click", () => {
  portfolioOverlay.style.display = "none";
});
// ==========================switching project and skills=================================
skillButton.addEventListener("click", () => {
  if (projectButton.classList.contains("project-toggle-active")) {
    projectButton.classList.remove("project-toggle-active");
    skillButton.classList.add("project-toggle-active");
    // ======================setting responsiveness=====================
    if (window.innerWidth > 768) {
      skill.style.display = "flex";
      skill.style.flexDirection = "row";
      project.style.display = "none";
    } else {
      skill.style.display = "flex";
      skill.style.flexDirection = "column";
      project.style.display = "none";
    }
  } else {
    skillButton.classList.add("project-toggle-active");
  }
});
projectButton.addEventListener("click", () => {
  if (projectButton.classList.contains("project-toggle-active")) {
    projectButton.classList.add("project-toggle-active");
  } else {
    skillButton.classList.remove("project-toggle-active");
    projectButton.classList.add("project-toggle-active");
    if (window.innerWidth >= 768) {
      skill.style.display = "none";
      project.style.display = "grid";
    } else {
      skill.style.display = "none";
      project.style.display = "contents";
    }
  }
});
