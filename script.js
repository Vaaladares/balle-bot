function clickMenu() {
    if (menu.style.display == 'none')
        menu.style.display = 'block'
    else (
        menu.style.display = 'none'
    ) 
}

function mudouTamanho() {
    if (innerWidth >= 770)
        itens.style.display = 'block'
    else {
        itens.style.display = "none"
    }
}