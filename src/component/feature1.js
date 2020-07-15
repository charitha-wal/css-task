let input = [ {cuts:5 , length :16},{cuts:5 , length :30},{cuts:24 , length :36},{cuts:4 , length :18},{cuts:4 , length :28},{cuts:6 , length :20} ];
let rodLength = 120;

function reducer(acc , item) {
    return acc + (item.cuts * item.length)
}

let minRods = Math.ceil((input.reduce(reducer , 0))/120);

// 2nd commit feature1

function reduceTheWastage(array) {
    let con = array
    let sum = array.reduce((a, b) => a + b, 0)
    let arr1 = array
    let c = 1
    while (sum < 120 && c < min) {
        array = array.concat(con)
        sum = array.reduce((a, b) => a + b, 0)
        if (sum < 120) {
            arr1 = array
            c++
        }
    }
    min = Math.floor(min / c)
    return arr1
}