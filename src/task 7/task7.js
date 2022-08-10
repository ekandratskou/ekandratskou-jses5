function arrayToList(arr){ 
    var list = null; 
    for (var i=arr.length-1; i>=0; i--){
        list = {value: arr[i], rest:list}; 
    }
    return list; 
}

function listToArray(list) {
    var arr = [];
    for(list; list !== null; list = list.rest) {
      arr.push(list.value);
    }
    return arr;
}


function prepend( elem, list_old) {
    return {value: elem, rest: list_old};
     
}


function nth(list, num) {
    return (num == 0) ? list.value :  nth(list.rest, num - 1 );
}




