// ```
// 1) Make a pattern 
// ########
//  ######
//   ####
//    ##
// ```

function pattern1(row = 4, column = 8){
    let outputString = ""
    for(let i = 0 ; i < row ; i++){
        for(let j = 0 ; j< column ;j++){
            if(i > j || i >= column - j){
                outputString += " "
            }else outputString +="#"
        }
        outputString += '\n'
    }
    return outputString
}
console.log(pattern1())