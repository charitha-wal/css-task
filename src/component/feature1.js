let input = [ {cuts:5 , length :16},{cuts:5 , length :30},{cuts:24 , length :36},{cuts:4 , length :18},{cuts:4 , length :28},{cuts:6 , length :20} ];
let rodLength = 120;

function reducer(acc , item) {
    return acc + (item.cuts * item.length)
}

let minRods = Math.ceil((input.reduce(reducer , 0))/120);