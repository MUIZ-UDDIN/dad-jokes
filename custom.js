const jokes = document.getElementById('joke')
const jokesbtn = document.getElementById('jokebtn')

jokesbtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
        jokes.innerHTML = data.joke
    })
}