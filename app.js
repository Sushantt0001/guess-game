const max = prompt("Enter the maximum number");
const randomNum = Math.floor(Math.random() * max) + 1;
let guess = prompt("Enter your first guess");
while (true) {
    if (guess === null) {
        alert("Game Over");
        break;
    }
    guess = Number(guess);
    if (guess === randomNum) {
        alert("🎉 You Win!");
        break;
    } else if (guess < randomNum) {
        guess = prompt("Too low! Enter a new guess");
    } else {
        guess = prompt("Too high! Enter a new guess");
    }
}