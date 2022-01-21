// Selectors

let fizzBuzzSection = document.getElementById("fizzBuzz");

// Function FizzBuzz: Display Fizz if %3, Buzz if %5 and FizzBuzz for both.

function displayFizzBuzz() {
    let number = 100;
    for (let i = 1; i <= number; i++) {
        let check = checkFizzBuzz(i); 
        console.log(check);      
        if (check === "FizzBuzz") {
            let display = document.createElement("div");
            display.innerHTML += i + ": FizzBuzz<br>";
            fizzBuzzSection.appendChild(display);
        }
        else if (check === "Fizz") {
            let display = document.createElement("div");
            display.innerHTML += i + ": Fizz<br>";
            fizzBuzzSection.appendChild(display);
        } 
        else if (number === "Buzz") {
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
function checkFizzBuzz(number){
    if (number % 3 == 0 && number % 5 == 0) {
        return "FizzBuzz"
    }
    else if (number % 3 == 0) {
        return "Fizz"
    } 
    else if (number % 5 == 0) {
        return "Buzz"
    } 
}

displayFizzBuzz();