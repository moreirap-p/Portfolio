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
