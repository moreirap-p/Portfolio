const titles =
    ["Paulo","Pualo","encore Paulo","toujours Paulo","Polo","Paul","lui","lui ?","oui, lui","lui là",
        "bon arrêtes.","svp.","stp.","(-_-)","...."]
const pic = document.getElementById("pualo")
let nb = -1

if (localStorage.getItem('sh') !== 'enabled') pic.addEventListener("mouseenter", nextTitle)

function nextTitle() {
    nb++
    pic.title = titles[nb]
    localStorage.setItem('sh', 'enabled')

    if(pic.title === 'undefined') {
        pic.removeEventListener('mouseenter', nextTitle)
        pic.title = titles[0]
    }
}
