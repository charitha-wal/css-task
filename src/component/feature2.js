// var input = [{ cuts: 5, len: 16 }, { cuts: 5, len: 30 }, { cuts: 4, len: 18 }, { cuts: 4, len: 28 }, { cuts: 24, len: 36 }, { cuts: 6, len: 20 }]
// var input = [{ cuts: 6, len: 36 }, { cuts: 6, len: 20 }];
var input = [{ cuts: 8, len: 1 }, { cuts: 6, len: 115 }];
// var input = [{ cuts: 5, len: 1 }, { cuts: 6, len: 115 },{cuts:7,len:10}];
var min = -1
var maxRodLength = 120

var sumLength = input.reduce((acc , item)=> {
    return acc + (item.len)
} , 0);

function reducer(acc , item) {
    return acc + (item.cuts * item.length)
}

let minRods = Math.ceil((input.reduce(reducer , 0))/120);


function findLowestCutsArray() {
    let cuts = input.map(item => item.cuts)
    let sub = []
    let arr1 = []
    min = Math.min(...cuts)

    if (sumLength < 120 && sumLength * 2 > 120) {
        input.forEach(item => {
            sub.push(item)
        })   
    }
    else {
        input.forEach(item => {
            if ((item.cuts === min || item.cuts >= min))
                sub.push(item)
        })        
    }
    sub.forEach(item => {
        let n = parseInt(item.cuts / min)
        while (n > 0) {
            arr1.push(item.len)
            n--
        }
    })
    let sum = arr1.reduce((a, b) => a + b, 0)
    if (sum < 120) {
        return reduceTheWastage(arr1)
    }
    return arr1
}
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
function findBestSubset(sub) {
    let temp = -1
    let diff = maxRodLength
    const getAllSubsets =
        theinput => theinput.reduce(
            (subsets, value) => subsets.concat(
                subsets.map(set => [value, ...set])
            ),
            [[]]
        );
    let subsets = getAllSubsets(sub)
    // console.log(subsets);
    for (let i = 0; i < subsets.length; i++) {
        let sum = subsets[i].reduce((a, b) => a + b, 0)
        if (sum <= maxRodLength) {
            if (maxRodLength - sum < diff) {
                diff = maxRodLength - sum
                temp = i
            }
        }
    }
    return subsets[temp]
}
function reduceTheInput(bestSubset) {
    bestSubset.forEach(item => {
        let index = input.findIndex(item1 => item1.len === item)
        input[index].cuts = input[index].cuts - min
    })
    input = input.filter(item => item.cuts > 0)
    console.log("bundle:")
    while (min > 0) {
        console.log(bestSubset)
        min--
    }
}
while (input.length > 0) {

    let lowestCutsArray = findLowestCutsArray()
    if(! (sumLength <= 120)){ 
        let bestSubset = findBestSubset(lowestCutsArray)
        reduceTheInput(bestSubset)
    }
    else{
        reduceTheInput(lowestCutsArray)
    }

}




// second commit in feature2 

for(let i =1 ; i<=10 ; i++){
    console.log(i);
}