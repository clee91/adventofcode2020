fs = require('fs');
const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n');

let correctPasswords = 0;

function formatInput(str) {
    let newArr = str.split(/\W\s*/);
    let min = newArr[0], max = newArr[1], char = newArr[2], pWord = newArr[3], target = 0;
    for (let i = 0; i < pWord.length; i++) {
        if (pWord[i] == char) {
            target++;
        } 
    }
    if (target >= min && target <= max) {
        return true;
    }
    else return false;
   
}


input.forEach(element => {
    if(formatInput(element) == true){
        correctPasswords++
    }
    console.log(element)
});
console.log(correctPasswords)












