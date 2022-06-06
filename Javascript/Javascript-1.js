
//FUNCTION 
function deepCopy(origin) {

    return Object.assign(origin)
  }
  
//TEST
  var originVariable = {
    string: 'abc',
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

  //DEEP COPY vs SHALLOW COPY
  var deepCopyVariable = deepCopy(originVariable);
  var shallowCopyVariable = {...originVariable};

  console.log(originVariable);  
  console.log(deepCopyVariable);
  console.log(shallowCopyVariable);
  
  console.log(originVariable===deepCopyVariable);
  console.log(originVariable===shallowCopyVariable);

  //IF WE CHANGE THE VALUES:
  originVariable.string = 'xyz';
  
  console.log(deepCopyVariable);
  console.log(shallowCopyVariable);

  console.log(originVariable===deepCopyVariable);
  console.log(originVariable===shallowCopyVariable);
