//contraints
const colors =["red","green","blue"];
const limit =[12,13,14];

let p1 = document.getElementById("p");
let p = p1.textContent.replace(/\s/g, "");
const pSplit = p.split("Game")

// console.log(pSplit)

// make it cleaner 
//ex : "8:3green,10red,15blue;1green,9red;9blue,2green,12red"
// goal : {GameId : 8 , red: [10,9,12], blue:[15,9]...}

function alpha(string) {
    let gameId = string[0];
    let arrLetter = [];
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string[i] * 1)) {
       
       
            // IF 2 DIGIT NUMBER
        if (!isNaN(string[i] * 1) && !isNaN(string[i + 1] * 1)) {
            let nr = string[i] + string[i + 1];
            for (let a = i + 2; a < i + 7 && a < string.length; a++) {
                arrLetter.push(string[a]);
                let word = arrLetter.join("");
                if (colors.includes(word)) {
                    console.log("Match:", word, nr);
                    return;
                }
                if (colors.includes(word.slice(0, -1))) {
                    console.log("Match without last character:", word, nr);
                    return;
                }
                if (colors.includes(word.slice(0, -2))) {
                    console.log("Match without last two characters:", word, nr);
                    return;
                }
            }
        }


            // If current character is a digit

            // IF 1 DIGIT NUMBER
            let nr = string[i];
            for (let a = i + 1; a < i + 6 && a < string.length; a++) {
                arrLetter.push(string[a]);
                let word = arrLetter.join("");
                if( colors.includes(word) /*green*/){
                    console.log(word)
                    console.log(nr)
                    return
                }

                if( colors.includes(word.slice(0,-1)) /*blue*/){
                    console.log(word)
                    console.log(nr)
                    return
                }

                if( colors.includes(word.slice(0,-2)) /*red*/){
                    console.log(word)
                    console.log(nr)
                    return 
                }
            }

        }
    }
}

alpha("blue;1green");

