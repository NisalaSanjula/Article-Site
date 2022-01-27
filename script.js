var content = document.getElementsByTagName("body")[0],
    darkMode = document.getElementById("dark-change");
darkMode.addEventListener("click", function () {
    darkMode.classList.toggle("active"), content.classList.toggle("night");
});

