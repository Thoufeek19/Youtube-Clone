// ===== Dark Mode Toggle =====
const themeToggle = document.getElementById("themeToggle");

// Apply saved theme
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-theme");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  const isDark = themeToggle.checked;
  document.body.classList.toggle("dark-theme", isDark);
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
});


// ===== Sidebar Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});
