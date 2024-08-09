let displayValue = [0],
    firstNumber,
    operator,
    secondNumber

const display = document.querySelector('.display')
const allClearButton = document.querySelector('#ac')
const signs = document.querySelectorAll('.sign')
const numbers = document.querySelectorAll('.number')
const pedios = document.querySelector('#period')

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operator) {
    switch(operator) {
        case 'addition': add(a, b)
        case 'subtraction': subtract(a, b)
        case 'multiplication': multiply(a, b)
        case 'division': divide(a, b)
        default: return
    }
}

allClearButton.addEventListener('click', () => {
    displayValue = [0]
    display.textContent = displayValue.join('')
})

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (displayValue.length === 1 && displayValue[0] == 0) {
            displayValue[0] = e.currentTarget.textContent
        } else {
            displayValue.push(e.currentTarget.textContent)   
        }  
        display.textContent = displayValue.join('')
    }) 
})

display.textContent = displayValue.join('')