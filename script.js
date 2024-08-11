let isFirstCharacter = true,
    firstNumber,
    operator,
    secondNumber

const displayText = document.querySelector('.display')
const allClearButton = document.querySelector('#ac')
const signButtons = document.querySelectorAll('.sign')
const equalsButton = document.querySelector('#equals')
const numberButtons = document.querySelectorAll('.number')
const periodButton = document.querySelector('#period')
const percentButton = document.querySelector('#percent')
const plusMinusButton = document.querySelector('#plusminus')

function getMaxLength() {
    return displayText.textContent.match('-') ? 9 : 8
}

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
    let total = 0
    switch(operator) {
        case 'addition':
            total = add(a, b)
            break
        case 'subtraction': 
            total = subtract(a, b)
            break
        case 'multiplication': 
            total = multiply(a, b)
            break
        case 'division': 
            total = divide(a, b)
            break
        default: 
            return
    }

    if (! Number.isInteger(total)) {
        total =  Math.round(total * 10 ** 5) / 10 ** 5
    }

    if (total.toString().length > getMaxLength()) {
        total = total.toExponential(2)
    }

    displayText.textContent = total
}

allClearButton.addEventListener('click', () => {
    displayText.textContent = 0
    firstNumber = 0
    operator = null
    secondNumber = 0
    isFirstCharacter = true
})

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', (e) => {
        const number = e.currentTarget.textContent  

        if (isFirstCharacter) {
            isFirstCharacter = number == 0 ? true : false
            displayText.textContent = number
        } 
        else {
            displayText.textContent += number
        }
        const maxLength = getMaxLength()
        if (displayText.textContent.length > maxLength) displayText.textContent = displayText.textContent.slice(0, maxLength)
    }) 
})

equalsButton.addEventListener('click', (e => {
    if (isFirstCharacter) return
    secondNumber = parseFloat(displayText.textContent)
    operate(firstNumber, secondNumber, operator)
    isFirstCharacter = true
}))

signButtons.forEach(signButton => {
    signButton.addEventListener('click', (e) => {
        firstNumber = parseFloat(displayText.textContent)
        operator = e.currentTarget.id
        isFirstCharacter = true
    })
})

periodButton.addEventListener('click', () => {
    if (isFirstCharacter) {
        displayText.textContent = '0.'
        return
    }
    if (displayText.textContent.includes('.')) return

    displayText.textContent += '.'
    isFirstCharacter = false
})

percentButton.addEventListener('click', () => {
    displayText.textContent = parseFloat(displayText.textContent) / 100
    isFirstCharacter = true
})

plusMinusButton.addEventListener('click', () => {
    displayText.textContent = parseInt(displayText.textContent) * -1
})