const p = document.getElementById("p");

let str = JSON.stringify(p.textContent);
// console.log(str);

const strCopy = str.split("\\n  ")

// console.log(strCopy)

// arrStrings -> string uri separate 
const arrStrings = strCopy.map(part=> part.trim())
console.log(arrStrings)

const arrNumbers = ["0","1","2","3","4","5","6","7","8","9"];
// ex string : "46threevqs8114"

// findingNumberInstring (2string1) output: [21]
const arrRezultatFinal = [];
function findingNumberInString (string) {
    let arrRezultat = [];
    for (let i = 0; i<=string.length; i++){
        if (arrNumbers.includes(string[i])) {
            arrRezultat.push(string[i]);
        }
    }
    
    if (arrRezultat.length=== 1){
        arrRezultatFinal.push(`${arrRezultat[0]}` + `${arrRezultat[0]}`)
    }

    if (arrRezultat.length>1){
        arrRezultatFinal.push(`${arrRezultat[0]}` + `${arrRezultat[arrRezultat.length-1]}`)
    }
    
}

// findingNumberInString("34threevqs9");

// repeating  the function findingNumberInString
function addingNumbers(array){
    for(let i = 0 ; i<=array.length-1 ; i++){
        findingNumberInString(array[i]);
    }

}

addingNumbers(arrStrings);
console.log(arrRezultatFinal)

let x = arrRezultatFinal.reduce((a,b)=> a*1+b*1,0 );
console.log(x)
