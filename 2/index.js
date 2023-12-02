//contraints
const colors =["red","green","blue"];
const limit =[12,13,14];

let p1 = document.getElementById("p");
let p = p1.textContent.replace(/\s/g, "");
const pSplit = p.split("Game")

console.log(pSplit)

// make it cleaner 
//ex : "8:3green,10red,15blue;1green,9red;9blue,2green,12red"
// goal : {GameId : 8 , red: [10,9,12], blue:[15,9]...}

function alpha(string) {
    let arrLetter = [];
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string[i] * 1)) {
            // If current character is a digit

            // IF 1 DIGIT NUMBER
            let nr = string[i];
            for (let a = i + 1; a < i + 6 && a < string.length; a++) {
                arrLetter.push(string[a]);
                let word = arrLetter.join("");
                if( colors.includes(word) /*green*/){
                    console.log(word)
                    return
                }

                if( colors.includes(word.slice(0,-1)) /*blue*/){
                    console.log(word)
                    return
                }

                if( colors.includes(word.slice(0,-2)) /*red*/){
                    console.log(word)
                    return 
                }
            }

            // IF 2 DIGIT NUMBER
            // if (!isNaN(string[i] * 1) && !isNaN(string[i + 1] * 1)) {
            //     let nr = string[i] + string[i + 1];
            //     for (let a = i + 2; a < i + 5 && a < string.length; a++) {
            //         arrLetter.push(string[a]);
            //     }
            //     i++; // Increment i by 1 more to skip the next digit
            // }
        }
    }
}

alpha("1blueqw");

