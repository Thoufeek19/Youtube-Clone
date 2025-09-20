const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-theme");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});


function func()
{
  document.querySelector(".sidebar").style.display = "block"
}
