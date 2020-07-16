function factorsOf3 (num , ending) {
    let x = num;
    if(x%3 == 0){
        console.log(x);
    }
    x = x +1
    if(x <=ending){
        factorsOf3(x , ending)
    }
    else{
        return
    }

}

let starting = 1 ;
let ending = 19;

factorsOf3 (starting , ending)