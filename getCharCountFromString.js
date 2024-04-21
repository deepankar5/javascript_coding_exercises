// the input can be alphnumaric, and we have to get all the counts of characters
// getCharCountFromString("aaa") => {a:3}
// getCharCountFromString("AaA") => {a:3}

let input = "My phone number is 8127065320"

function getCharCountFromString(str){
    let objectObj = {};
    // taking each charter
    // lovercase the character and chech if it's alphanumberic
    //if yes then put that in the object with counter
    // if no the don't put that in the object


    // to increase the couter
    // check if that char is in the output object if yes the just the existing couter by 1 else make the couter 1
    const toLower = str.toLowerCase()
    for(let i=0 ;i < toLower.length; i++){
        if(toLower[i].match(/[a-z0-9]/i)){
            if(objectObj.hasOwnProperty(toLower[i])){
                objectObj[toLower[i]] += 1 
            }else objectObj[toLower[i]] = 1
        }
    }
    return objectObj

    [{name: "A", age: 10}, {name: "B", age: 10}, {name: "C", age: 15}]
}

console.log(getCharCountFromString(input));