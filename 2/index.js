//contraints
const colors =["red","green","blue"];
const limit =[12,13,14];

let p1 = document.getElementById("p");
let p = p1.textContent.replace(/\s/g, "");
const pSplit = p.split("Game")

console.log(pSplit)

// make it cleaner 
// goal : {GameId : 8 , red: [10,9,12], blue:[15,9]...}
//ex : "8:3green,10red,15blue;1green,9red;9blue,2green,12red"
let goal = {};

alpha("8red,2green");
function alpha(string) {
    //input : 8red,2green,3red,4blue
    //output: 8 red 2 green 3 red 4 blue 

    let gameId = string[0];
    let arrLetter = [];
    for (let i = 0; i <= string.length; i++) {
        
        // If current character is a digit
        if (!isNaN(parseInt(string[i]))) {


            // IF 1 DIGIT NUMBER
            let nr = parseInt(string[i]);

            //loop to obtain the word green/blue/red
            for (let a = i + 1; a <= i + 6 && a <= string.length; a++) {
                //all the letters are pushed into an array
                arrLetter.push(string[a]);
                // all the letters are joined into a word
                let word = arrLetter.join("");
                if( colors.includes(word) /*green*/){
                    console.log(word)
                    console.log(nr)
                   
                }

                if( colors.includes(word.slice(0,-1)) /*blue*/){
                    console.log(word)
                    console.log(nr)
                    
                }

                if( colors.includes(word.slice(0,-2)) /*red*/){
                    console.log(word)
                    console.log(nr)
                    
                }
            }






       
            // IF 2 DIGIT NUMBER
        // if (!isNaN(string[i] * 1) && !isNaN(string[i + 1] * 1)) {
        //     let nr = string[i] + string[i + 1];
        //     for (let a = i + 2; a < i + 7 && a < string.length; a++) {
        //         arrLetter.push(string[a]);
        //         let word = arrLetter.join("");
        //         if (colors.includes(word)) {
        //             console.log("Match:", word, nr);
        //             return;
        //         }
        //         if (colors.includes(word.slice(0, -1))) {
        //             console.log("Match without last character:", word, nr);
        //             return;
        //         }
        //         if (colors.includes(word.slice(0, -2))) {
        //             console.log("Match without last two characters:", word, nr);
        //             return;
        //         }
        //     }
        // }


          
        }
    }
}


