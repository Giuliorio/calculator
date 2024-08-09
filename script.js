let displayValue = [0],
    isFirstCharacter = true,
    firstNumber,
    operator,
    secondNumber

const display = document.querySelector('.display')
const allClearButton = document.querySelector('#ac')
const signs = document.querySelectorAll('.sign')
const equalsButton = document.querySelector('#equals')
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
        if (isFirstCharacter) {
            isFirstCharacter = false
            displayValue[0] = e.currentTarget.textContent
        } else {
            displayValue.push(e.currentTarget.textContent)   
        }  
        display.textContent = displayValue.join('')
    }) 
})

equalsButton.addEventListener('click', (e => {
    if (e.currentTarget.id === "equals") {
        secondNumber = displayValue.join('')
        operate(firstNumber, secondNumber, operator)
        isFirstCharacter = true
    }
}))

signs.forEach(sign => {
    sign.addEventListener('click', (e) => {
        firstNumber = displayValue.join('')
        operator = e.currentTarget.id
        isFirstCharacter = true
    })
})


display.textContent = displayValue.join('')