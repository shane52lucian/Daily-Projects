const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currActive = 1

next.addEventListener('click', () => {
    currActive++

    if (currActive > circles.length) {
        currActive = circles.length
    }

    updateProgress()
})

prev.addEventListener('click', () => {
    currActive--

    if (currActive < 1) {
        currActive = 1
    }

    updateProgress()
})

function updateProgress(e) {
    circles.forEach((circle, i) => {

        let completed = i - 1;
        if (i < 1) {
            completed = 1;
        }

        if (i < currActive) {

            // console.log(circles[completed]);
            circle.classList.add('active');
            circles[completed].classList.remove('active');
            circles[completed].classList.add('complete');
        } else {
            circle.classList.remove('active')
            circles[completed].classList.remove('complete');
        }


        const completes = document.querySelectorAll('.complete');

        progress.style.width = ((completes.length) / (circles.length - 1)) * 100 + '%';

        if (currActive === 1) {
            prev.disabled = true
        } else if (currActive === circles.length) {
            next.innerText = 'Done'
            next.classList.add('done')
        } else {
            prev.disabled = false
            next.innerText = 'Next'
            next.classList.remove('done')
        }
    })
}