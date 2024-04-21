//        row   column   how to get
// #####  1     5         6 - 1
// ####   2     4         6 - 2
// ###    3     3         6 - 3
// ##     4     2         6 - 4
// #      5     1         6 - 5

function Pattern1(row = 5, column = 5){
    let outputString = ""
    for(let i = 1 ; i <= row ; i++){
        for(let j = 1; j <= (column+1) - i ; j++){
            outputString += "#"
        }
        outputString += "\n"
    }
    return outputString
}
//Pattern2 
//      row    col    first app     sec abp(space calculation)
// #    1       1       1           3 abs(4-1)
// ##   2       2       2           2 abs(4-2)
// ###  3       3       3           1 abs(4-3)
// #### 4       4       4           0 abs(4-4)
// ###  5       3       8-5         1 abs(4-3)
// ##   6       2       8-6         2
// #    7       1       8-7         3

function Pattern2(row = 7, col = 4){
    let outputString = ""
    // for(let i = 1 ; i <= row; i++){
    //     if( i < col){
    //         for(let j = 1 ; j <= i ; j++){
    //             outputString += "#"
    //         }
    //     }else {
    //         for(let j = 1 ; j <= 8 - i ; j++){
    //             outputString += "#"
    //         }
    //     }
    //     outputString += "\n"
    // }
    // space calculation
    for(let i = 1 ; i<= row ; i++){
        for(let j = col ; j > Math.abs(col - i) ; j--){
            outputString += "#"
        }
        outputString += "\n"
    }

    return outputString
}
console.log(Pattern2())

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
// 2) Pattern 2
//    ##
//   ####
//  ######
// ########
// ########
//  ######
//   ####
//    ##

function pattern2(row = 8, column = 8){
    let outputString = ""
    for(let i = 0 ; i < row ; i++){
        if(i < row/2){
            for(let j = 0 ; j < column ; j++){
                if(j < column/2){
                    if(i < (column/2-1) - j){
                        outputString += " "
                    }else outputString += "#"
                }else{
                    if(i >= j - (column/2)){
                        outputString += "#"
                    }else outputString += " "
                }
            }
        }else{
            for(let j = 0 ; j < column ; j++){
                if((i - row/2) > j || (i-row/2) >= column - j){
                    outputString += " "
                }else outputString +="#"
            }
        }
        outputString += "\n"
    }
    return outputString
}
//Pattern 3
// #            #
//  ##        ##
//   ###    ###
//    ########
//    ########
//   ###    ###
//  ##        ##
// #            #

function Pattern3(row = 4, column = 7){
    let outputString = ""
    for(let i = 0 ; i < row ; i++ ){
        for(let j = 0 ; j< column ;j ++){
            if(i > j || (j > i && j < column - (2*i))){
                outputString += " "
            }else outputString += "#"
        }
        outputString += "\n"
    }
    return outputString
}


let a = [1,2,3]
a.map(item => ({'val': item}))