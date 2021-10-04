const messages = [
    "Hola",
    "Ana",
    "Laura",
    "karla",
    "Victor",
    "Luis"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random () * messages.length)];
    console.log(message);
};

module.exports = {randomMsg};