const buttons = document.querySelectorAll("#mode-toggle")

buttons.forEach(button => {
    button.addEventListener('click', function() {
        document.body.classList.toggle("dark-mode")
        localStorage.setItem('dark', document.body.classList.contains("dark-mode") ? 'enabled' : 'disabled')
    })
})

//valeur "par défaut" lors du changement de page
if (localStorage.getItem('dark') === 'enabled') document.body.classList.add('dark-mode')


function switchIconToDark() {
    const icon = document.getElementById('switch')
    icon.src = "images/dark-mode.webp"
}

function switchIconToLight() {
    const icon = document.getElementById('switch')
    icon.src = "images/dark-mode-hover.webp"
}