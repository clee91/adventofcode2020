fs = require('fs');
const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n');

let correctPasswords = 0;

function formatInput(str) {
    let newArr = str.split(/\W\s*/);
    let min = newArr[0], max = newArr[1], char = newArr[2], pWord = newArr[3];
    for (let i = 0; i < pWord.length; i++) {
        if (((pWord[min - 1] == char) && (pWord[max - 1] != char)) || ((pWord[min - 1] != char) && (pWord[max - 1] == char))) {
            console.log('true')
            return true;
            
        }
        else {
            console.log('false')
            return false;
            
        }
    }
}

input.forEach(element  => {
    if(formatInput(element)){
        correctPasswords++
       
    };
    
});

console.log(correctPasswords)















