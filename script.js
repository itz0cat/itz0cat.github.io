// script.js

// Sidebar Toggle
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");
}

// Typing Animation (optional implementation if text needs animation on load)
function typingAnimation() {
  const typingElement = document.querySelector(".typing");
  const text = "Welcome to My Website";
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text[index];
      index++;
      setTimeout(type, 100); // Speed of typing in milliseconds
    }
  }

  typingElement.textContent = ""; // Reset text content
  type();
}

window.onload = typingAnimation;

// Admin Login & Panel Logic
function openAdminLogin() {
  document.getElementById("admin-login").style.display = "block";
}

function closeAdminLogin() {
  document.getElementById("admin-login").style.display = "none";
}

function checkAdminPassword() {
  const password = document.getElementById("admin-password").value;
  if (password === "call me daddy") {  // Replace with a secure check in production
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
  } else {
    alert("Incorrect password");
  }
}

function logoutAdmin() {
  document.getElementById("admin-panel").style.display = "none";
  document.getElementById("admin-login").style.display = "none";
}

function saveChanges() {
  const aboutContent = document.getElementById("edit-about").value;
  const vlogsContent = document.getElementById("edit-vlogs").value;
  const projectsContent = document.getElementById("edit-projects").value;

  document.getElementById("about-content").textContent = aboutContent;
  document.getElementById("vlogs-content").textContent = vlogsContent;
  document.getElementById("projects-content").textContent = projectsContent;

  alert("Changes saved!");
  logoutAdmin(); // Hide admin panel after saving
}
