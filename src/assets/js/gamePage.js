const thumb = document.querySelector(".img")
const container = document.querySelector(".container")

if(thumb.offsetWidth > thumb.offsetHeight) {
        container.classList.add('img-horizontal')
    }
    else {
        container.classList.remove('img-horizontal')
    }