//contraints
const colors =["red","green","blue"];
const limit =[12,13,14];

let p1 = document.getElementById("p");
let p = p1.textContent.replace(/\s/g, "");
const arrayStrings = p.split("Game")
const removeFirst = arrayStrings.shift();
console.log(arrayStrings)

//array ul care imi castiga jocul
const winArray =[];


const resultObject = {};
// function that recives a string and returns a structured object
function alpha(string) {
       // OUTPUT
/*
blue [2, 4, 8]
green [3, 8]
red [2, 10, 11]
*/  
   
    const resultObject = {};
    let gameId = parseInt(string[0]);
    
    //string iterabil
    let iterableString = string.substring(2).replaceAll(";",",");
    
    //daca are id 2 digits 
    if(!isNaN(parseInt(string[1]))){
        
        gameId = parseInt(string[0]+string[1]);
        iterableString = string.substring(3).replaceAll(";",",")

        // daca are id de 3 digits
        if(!isNaN(parseInt(string[2]))){
            
            gameId = parseInt(string[0]+string[1]+string[2]);
            iterableString = string.substring(4).replaceAll(";",",")
    
        }
    }



    //separam in grupe 
    const groups = iterableString.split(",");

    for (const group of groups) {
        let num = parseInt(group[0]);
        let color = group.substring(1);
        if(!isNaN(parseInt(group[1]))){
            //2 digit number
            num = parseInt(group[0]+group[1])
            color = group.substring(2);
        }
        // daca nu exista culoarea in obiect
        if (!resultObject[color]) {
            resultObject[color] = [];
        }
        //
        resultObject["gameId"]=gameId;
        resultObject[color].push(num);
    }
    // console.log(`Game id : ${gameId}, Red : Green: Blue:`)
    // console.log(iterableString)
    console.log(resultObject)
    return resultObject

}

//functions that recives a structured object and pushes gameId
//if the conditions have been met
function beta(object){
    let redLimitBroken = object.red.some(nr => nr > 12);
    let greenLimitBroken = object.green.some(nr => nr > 13);
    let blueLimitBroken = object.blue.some(nr => nr > 14);

    if(!redLimitBroken && !greenLimitBroken && !blueLimitBroken){
        winArray.push(object["gameId"]);
        // console.log(object.gameId)
    } 

}

// exemple 
/*
const x = alpha("88:2red,2blue,3green;10red,4blue;8blue,8green,11red");

beta(x)
"1:10red,7green,3blue;5blue,3red,10green;4blue,14green,7red;1red,11green;6blue,17green,15red;18green,7red,5blue"
: 

*/

// solutie care combina ambele functii 
function solution(arrStrings){
    arrStrings.forEach(string => {
        beta(alpha(string));
    })
}

solution(arrayStrings);
console.log(winArray)
let win = winArray.reduce((prev, curr) => curr + prev, 0);

console.log(win)
// let c ="1:10red,7green,3blue;5blue,3red,10green;4blue,14green,7red;1red,11green;6blue,17green,15red;18green,7red,5blue"
// console.log(alpha(c))
// console.log(beta(alpha(c)))