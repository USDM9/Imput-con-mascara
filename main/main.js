const inputCard = document.querySelector('#inputCard');
const inputDate = document.querySelector('#inputDate');
const inputCVV = document.querySelector('#inputCVV');

const maskNumber = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';


let current = '';
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];


inputCard.addEventListener("keydown", (e) => {
    
    if(e.key === 'Tab'){
        return;
    }

    e.preventDefault();
    handleInput(maskNumber, e.key, cardNumber);
    inputCard.value = cardNumber.join('');
});

function handleInput(mask, key, arr) {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '7', '8', '9'];

    if(key === 'Backspace' && arr.length > 0){
        arr.pop();
        return;
    }

    if(numbers.includes(key) && arr.length + 1 <= mask.length){
        if(mask[arr.length] === '-' || mask[arr.lenght] === '/'){
            arr.push(mask[arr.length], key);
            console.log(mask.length)
            console.log(arr.length)
        }else {
            arr.push(key);
        }
    }
};




