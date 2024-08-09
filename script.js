let displayValue = '0',
    isFirstCharacter = true,
    firstNumber,
    operator,
    secondNumber

const displayText = document.querySelector('.display')
const allClearButton = document.querySelector('#ac')
const signButtons = document.querySelectorAll('.sign')
const equalsButton = document.querySelector('#equals')
const numberButtons = document.querySelectorAll('.number')
const periodButton = document.querySelector('#period')

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
    displayValue = '0'
    display.textContent = displayValue
    isFirstCharacter = true
})

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', (e) => {
        const number = e.currentTarget.textContent
        if (isFirstCharacter) {
            isFirstCharacter = false
            displayValue = number
        } else {
            displayValue += number
        }
        displayText.textContent = displayValue
    }) 
})

equalsButton.addEventListener('click', (e => {
    secondNumber = displayValue
    operate(firstNumber, secondNumber, operator)
    isFirstCharacter = true
}))

signButtons.forEach(signButton => {
    signButton.addEventListener('click', (e) => {
        firstNumber = displayValue
        operator = e.currentTarget.id
        isFirstCharacter = true
    })
})