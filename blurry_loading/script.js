const loadText = document.querySelector('.loading-text')
const main = document.querySelector('.main')

let load = 0
let i = setInterval(blurring, 20)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(i)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    main.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}