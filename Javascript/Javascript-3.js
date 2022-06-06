function execute(code, variables) {
    if(code.includes('$math.sum')){
        return console.log("Sum: ", Object.values(variables).reduce((a,b) => (b + a)));
    }
    if(code.includes('$math.mul')){
        return console.log("Mul: ", Object.values(variables).reduce((a,b) => (b * a)));
        
    }
    }
    
    execute('$logger("Sum:", $math.sum(a, b))', { a: 17, b: 3, c: 4});
    // returns Sum: 20
    execute('$logger("Mul:", $math.mul(a, b))', { a: 17, b: 3 });
    // returns Mul: 51