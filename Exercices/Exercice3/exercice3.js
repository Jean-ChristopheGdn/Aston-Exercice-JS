// Selectors

let fizzBuzzSection = document.getElementById("fizzBuzz");

// Function FizzBuzz: Display Fizz if %3, Buzz if %5 and FizzBuzz for both.

function fizzBuzz() {
    let number = 100;
    for (let i = 1; i <= number; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            let display = document.createElement("div");
            display.innerHTML += i + ": FizzBuzz<br>";
            fizzBuzzSection.appendChild(display);
        }
        else if (i % 3 == 0) {
            let display = document.createElement("div");
            display.innerHTML += i + ": Fizz<br>";
            fizzBuzzSection.appendChild(display);
        } 
        else if (i % 5 == 0) {
            let display = document.createElement("div");
            display.innerHTML += i + ": Buzz<br>";
            fizzBuzzSection.appendChild(display);
        } 
        else {
            let display = document.createElement("div");
            display.innerHTML += i + "<br>";
            fizzBuzzSection.appendChild(display);
        }
    }
}
fizzBuzz();