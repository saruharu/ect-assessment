var $math = {
    sum: (a,b)=>{return a+b},
    mul: (a,b)=>{return a*b}
};

var $logger = {
    call: (text,result)=>{return console.log(text,result)}
}

//FUNCTION
function execute(code, variables) {
    if(code.includes('$math.sum')){
        return $logger.call("Sum:", Object.values(variables).reduce((a,b) => $math.sum(a,b)));
    }
    if(code.includes('$math.mul')){
        return $logger.call("Mul:", Object.values(variables).reduce((a,b) => $math.mul(a,b)));
    }
}



//TEST
execute('$logger("Sum:", $math.sum(a, b))', { a: 17, b: 3});
// returns Sum: 20
execute('$logger("Mul:", $math.mul(a, b))', { a: 17, b: 3});
// returns Mul: 51
execute('$logger("Mul:", $math.mul(a, b, c))', { a: 17, b: 3, c: 12});
// returns Mul: 612