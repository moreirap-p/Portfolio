function toggleDarkMode() {
    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.toggle("dark-box");
    }
}