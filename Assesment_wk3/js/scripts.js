// document.addEventListener('DOMContentLoaded', () => {
    
    
// });


const numbers = document.querySelectorAll('.number');
const customInput = document.getElementById('input-box')
customInput.value = 0;
// const customInput = document.querySelector('.input_box')

function clickMe(value) {
    const valueType = typeof(value);
    const inputValue = customInput.value;
    console.log(typeof(inputValue));

    if (valueType === 'number') {
        customInput.value += value;
        console.log(valueType);
    } else {
        switch (value) {
            case '.':
                if (inputValue.includes(value)){
                    break;
                } else {
                    inputValue += value;
                    break;
                }
            case 'clear':
                const clearInput = document.getElementById('clear');
                if (clearInput.innerHTML === 'C'){
                    customInput.value = 0;
                    break;
                } else {
                    customInput.value = 0;
                    clearInput.innerHTML = 'AC'
                    break;
                }
        }

        // if (value === '.'){
        //     console.log(inputValue.includes(value));
        //     if (inputValue.includes(value)){
        //         return;
        //         console.log(value.indexOf(inputValue));
        //     } else {
        //         customInput.value += value;
        //     }
        // };
    }
}


// console.log(customInput);
    
customInput.addEventListener('change', () => {
    console.log("hehehehehe");

})