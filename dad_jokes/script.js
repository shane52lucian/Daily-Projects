const jokeText = document.getElementById('jokeText')
const jokebtn = document.getElementById('jokeBtn')

jokebtn.addEventListener('click', () => getJoke())

getJoke()


async function getJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await await res.json()

    jokeText.innerHTML = data.joke
}