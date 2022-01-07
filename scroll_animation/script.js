const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', animateIn)

animateIn()

function animateIn() {
    const trigger = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < trigger) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}