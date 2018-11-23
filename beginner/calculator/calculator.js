const currentScreen = document.querySelector('.calcultor-number')
const keys = document.querySelectorAll('.key')
var currentNum = ''
var stack = [] 
var lastInputType = ''

keys.forEach(function(key){
    key.addEventListener('click', function(event){
        if (event.target.tagName === 'BUTTON' || 'P' ){
            var input = event.target.innerText
            if (input >= 0 && input <= 9){
                currentNum += input
                lastInputType = 'number'
            } else if ('+-×÷'.indexOf(input) !== -1){
                input = (input === '×') ? '*' : input
                input = (input === '÷') ? '/' : input
                if (lastInputType === 'number'){
                    stack.push(currentNum) 
                    stack.push(input)
                }
                currentNum = ''
                lastInputType = 'operator'
            } else if (input === '=' && lastInputType === 'number'){
                stack.push(currentNum)
                try {
                    currentNum = eval(stack.join(' '))
                } catch (e) {
                    currentNum = ''
                }
                stack = []
            } else if (input === '←') {
                if (currentNum.length > 1){
                    currentNum = currentNum.substr(0, currentNum.length - 1)
                } else {
                    currentNum = ''
                }
                lastInputType = 'operator'
            } else if (input === 'C'){
                currentNum = ''
                stack = []
                lastInputType = 'operator'
            }
            currentScreen.innerText = (!currentNum) ? '0' : currentNum
        }
        event.stopPropagation()
    })
})
