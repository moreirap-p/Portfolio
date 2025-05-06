const titles =
    ["Paulo","Pualo","encore Paulo","toujours Paulo","Polo","Paul","lui","lui ?","oui, lui","lui là",
        "bon arrêtes.","svp.","stp.","(-_-)","...."]
const pic = document.getElementById("pualo")
let nb = -1

if (localStorage.getItem('sh') !== 'on') {
    pic.addEventListener("mouseenter", nextTitle)
}

function nextTitle() {
    localStorage.setItem('sh','on')

    nb++
    pic.title = titles[nb]

    if(pic.title === 'undefined') {
        pic.removeEventListener('mouseenter', nextTitle)
        pic.title = titles[0]
    }
}

function colour() {
    const r = Math.floor(Math.random() * 361);
    const shadow = getComputedStyle(pic).filter.replace(/hue-rotate\([^)]+\)/, '');
    pic.style.filter = `${shadow}hue-rotate(${r}deg)`
}