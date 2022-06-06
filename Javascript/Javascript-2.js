

  function check(obj1,obj2){
    let i =0
    for(let key of Object.keys(obj1)){
        i = i+1
        if(!(obj2[key])){
            return false;
        }
        if(obj1.key!==obj2.key) return false;
    }
    return true;
}


var data1 = { a: 17, b: { c: 'Test', d: null } };
var data2 = { a: 17, b: { c: 'Test' } };
var data3 = { a: 17, b: null };
console.log(check(data1, data2));
console.log(check(data1, data3)); 
  
  
  const clone3 = window.structuredClone(a)
  console.log(deepCopy(a));
  console.log(typeof deepCopy(a).date);  // result of .toISOString()