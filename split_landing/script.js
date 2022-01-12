const left = document.querySelector('.left')
const right = document.querySelector('.right')

left.addEventListener('mouseenter', () => {
    left.classList.add('expand')
    right.classList.add('contract')
})

left.addEventListener('mouseleave', () => {
    left.classList.remove('expand')
    right.classList.remove('contract')
})

right.addEventListener('mouseenter', () => {
    right.classList.add('expand')
    left.classList.add('contract')
})

right.addEventListener('mouseleave', () => {
    right.classList.remove('expand')
    left.classList.remove('contract')
})