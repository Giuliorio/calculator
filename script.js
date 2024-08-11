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

function handleNumbers(number) {
    if (isFirstCharacter) {
        isFirstCharacter = number == 0 ? true : false
        displayText.textContent = number
    } 
    else {
        displayText.textContent += number
    }
    const maxLength = getMaxLength()
    if (displayText.textContent.length > maxLength) displayText.textContent = displayText.textContent.slice(0, maxLength)
}

function handleAllClear() {
    displayText.textContent = 0
    firstNumber = 0
    operator = null
    secondNumber = 0
    isFirstCharacter = true
}

function handleEquals() {
    if (isFirstCharacter) return
    secondNumber = parseFloat(displayText.textContent)
    operate(firstNumber, secondNumber, operator)
    isFirstCharacter = true
}

function handleSigns(sign) {
    firstNumber = parseFloat(displayText.textContent)
    operator = sign
    isFirstCharacter = true
}

function handleBackspace() {
    let textLength = displayText.textContent.length
    displayText.textContent = displayText.textContent.slice(0, textLength - 1)

    if (displayText.textContent === "") {
        displayText.textContent = '0' 
        isFirstCharacter = true  
    } 
}

function handlePeriod() {
    if (isFirstCharacter) {
        displayText.textContent = '0.'
        return
    }
    if (displayText.textContent.includes('.')) return

    displayText.textContent += '.'
    isFirstCharacter = false
}

function handlePercent() {
    displayText.textContent = parseFloat(displayText.textContent) / 100
    isFirstCharacter = true
}

function handlePlusMinus() {
    displayText.textContent = parseInt(displayText.textContent) * -1
}

allClearButton.addEventListener('click', handleAllClear)

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', (e) => {
        handleNumbers(e.currentTarget.textContent)
    }) 
})

equalsButton.addEventListener('click', handleEquals)

signButtons.forEach(signButton => {
    signButton.addEventListener('click', (e) => {
        handleSigns(e.currentTarget.id)
    })
})

periodButton.addEventListener('click', handlePeriod)

percentButton.addEventListener('click', handlePercent)

plusMinusButton.addEventListener('click', handlePlusMinus)

window.addEventListener('keydown', (e) => {
    let key = e.key

    if (parseFloat(key) || parseFloat(key) === 0) {
        handleNumbers(key)
    }

    switch(key) {
        case '=':
        case 'Enter':
            handleEquals()
            break
        case '+':
            handleSigns('addition')
            break
        case '-':
            handleSigns('subtraction')
            break
        case '*':
            handleSigns('multiplication')
            break
        case '/':
            e.preventDefault()
            handleSigns('division')
            break
        case 'c':
            handleAllClear()
            break
        case '%':
            handlePercent()
            break
        case '.':
            handlePeriod()
            break
        case '_':
            handlePlusMinus()
            break
        case 'Backspace':
            handleBackspace()
        default: return
    }
})