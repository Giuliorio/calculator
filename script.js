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
    displayValue = `${a + b}`
    displayText.textContent = displayValue
}

function subtract(a, b) {
    displayValue = `${a - b}`
    displayText.textContent = displayValue
}

function multiply(a, b) {
    displayValue = `${a * b}`
    displayText.textContent = displayValue
}

function divide(a, b) {
    displayValue = `${a / b}`
    displayText.textContent = displayValue
}

function operate(a, b, operator) {
    a = parseFloat(a)
    b = parseFloat(b)

    switch(operator) {
        case 'addition':
            add(a, b)
            break
        case 'subtraction': 
            subtract(a, b)
            break
        case 'multiplication': 
            multiply(a, b)
            break
        case 'division': 
            divide(a, b)
            break
        default: return
    }
}

allClearButton.addEventListener('click', () => {
    displayValue = '0'
    displayText.textContent = displayValue
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