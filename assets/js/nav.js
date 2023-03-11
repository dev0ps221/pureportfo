function switchNav(event){
    const burger = document.querySelector('nav .burger')
    if(burger){
        switchBurger(burger)
    }
    const links = document.querySelector('nav .links')
    if(links){
        switchLinks(links)
    }
}
function switchBurger(elem){
    elem.classList[elem.classList.contains('cross') ? 'remove' : 'add']('cross')
}
function switchLinks(elem){
    elem.classList[elem.classList.contains('visible') ? 'remove' : 'add']('visible')
}
document.querySelectorAll(
    'nav .link'
).forEach(
    navlink=>{
        navlink.addEventListener(
            'click',e=>{
                switchNav(null)
            }
        )
    }
)