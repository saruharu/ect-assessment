
function deepCopy(originalObject) {

    return Object.assign(originalObject)
  }
  
  const a = {
    string: 'string',
    number: 123,
    bool: false,
    nul: null,
    date: new Date(),  // stringified
    undef: undefined,  // lost
    inf: Infinity,  // forced to 'null'
    re: /.*/,  // lost
    nestedObj: {
        date: new Date()
    }
  }
  console.log(a);
  console.log(typeof a.date);  // Date object
  
  