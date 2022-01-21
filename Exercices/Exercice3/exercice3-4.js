// Selectors

let fizzBuzzSection = document.getElementById("fizzBuzz");
let fizzBuzzPlusSection = document.getElementById("fizzBuzzPlus");
let btnNextSelector = document.getElementsByClassName("btn-next");
let btnPreviousSelector = document.getElementsByClassName("btn-previous");

// Function display in dom 

function displayFizzBuzz() {
    let number = 100;
    for (let i = 1; i <= number; i++) {
        let check = checkFizzBuzz(i); 
      
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

// Function check fizz if %3, Buzz if %5 and FizzBuzz for both.

function checkFizzBuzz(number){
    if(number == 0){
        return ""
    }
    else if (number % 3 == 0 && number % 5 == 0) {
        return "FizzBuzz"
    }
    else if (number % 3 == 0) {
        return "Fizz"
    } 
    else if (number % 5 == 0) {
        return "Buzz"
    } else {
        return "";
    }
}

// Function fizzBUzz on click 

let number = 0;

function fizzBuzzPlus(){

    let container = document.createElement("div");
    let displayNumber = document.createElement("p");
    let text = document.createElement("p");
    let buttonNext = document.createElement("button");
    let buttonPrevious = document.createElement("button");

    container.className = "container-fizzBuzz-plus";
    text.className = "displayFizzBuzz";
    displayNumber.className ="displayNumber";
    buttonNext.innerHTML = "Next";
    buttonNext.className = "btn";

    buttonPrevious.innerHTML = "Previous";
    buttonPrevious.className = "btn";

    displayNumber.innerHTML = number;

    buttonNext.addEventListener('click',() =>  {
        number += 1;
        let check = checkFizzBuzz(number);
        displayNumber.innerHTML = number;
        text.innerHTML = check;
    })
    buttonPrevious.addEventListener('click', () => {
        number -= 1;
        let check = checkFizzBuzz(number);
        displayNumber.innerHTML = number;
        text.innerHTML = check;
    })

    container.appendChild(buttonPrevious);
    container.appendChild(text);
    container.appendChild(buttonNext);
    fizzBuzzPlusSection.appendChild(container);
    fizzBuzzPlusSection.appendChild(displayNumber)
}
