//FUNCTION
function check(obj1,obj2){
  [obj1,obj2] = [obj1,obj2].map(obj=>removeNull(obj)).map(obj=>JSON.stringify(obj));
  return obj1===obj2;
}


//clean the objects from null and undefined (flat & nested) elements
removeNull = (obj) => {
  Object.keys(obj).forEach(key =>
    (obj[key] && typeof obj[key] === 'object') && removeNull(obj[key]) ||
    (obj[key] === undefined || obj[key] === null) && delete obj[key]  ||
    (obj[key] && Array.isArray(obj) && obj.clean(undefined))

  );
  return obj;
};

//clean empty/undefined elements from arrays
Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};


//TEST
var data1 = { a: 17, b: { c: 'Test', d: null }, e: [45,20,null], f: new Date('02-25-2022'), g: true};
var data2 = { a: 17, b: { c: 'Test' },  e: [45,20], f: new Date('02-25-2022'), g: true};
var data3 = { a: 17, b: null };
var data4 = { a: 17, b: { c: 'Test' },  e: [45,25], f: new Date('02-10-2022')};

console.log(check(data1, data2));
console.log(check(data1, data3)); 
console.log(check(data2, data4)); 

  
  