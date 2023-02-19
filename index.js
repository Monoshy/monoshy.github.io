
document.addEventListener("DOMContentLoaded", init)

function init{

}

function addListenders{
    document.querySelectorAll('nav a').forEach(item =>{
        item.addEventListener('click', onNavication)
    })
}

