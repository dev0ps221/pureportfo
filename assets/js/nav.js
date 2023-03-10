function switchNav(event){
    const burger = document.querySelector('nav .burger')
    if(burger){
        switchBurger(burger)
    }
}
function switchBurger(elem){
    elem.classList[elem.classList.contains('cross') ? 'remove' : 'add']('cross')
}