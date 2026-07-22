console.log("Street Delights Loaded");
function toggleMenu() {
    const menu = document.getElementById("navLinks");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
    }
}
