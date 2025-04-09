const main = document.body.getElementsByTagName("main")[0]
const d = document.getElementById("default-contenu")

// i entre 1 et 6 (inclut)
function goToPage(i) {
    main.id = "bg-" + (i+4)
    d.style.display = "none"
    for (let j = 1; j < 7; j++) {
        const contenu = document.getElementById("c" + j)
        contenu.style.display = (j === i) ? "block" : "none"
    }
}