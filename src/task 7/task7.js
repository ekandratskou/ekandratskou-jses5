function arrayToList(arr) {
  var list = {};
  for(var i = 0; i <= arr.length; i++ ){
      list.value = arr.splice(0,1)[0];
      list.rest = (arr.length>0) ? arrayToList(arr) : null;
  }
     return list;
}


function listToArray(list) {
    let arr = [];
    for(list; list !== null; list = list.rest) {
      arr.push(list.value);
    }
    return arr;
}


function prepend( elem, list_old) {
    var list_new = {value: elem, rest: list_old};
    return list_new;
}


function nth(list, num) {
    return (num == 0) ? list.value :  nth(list.rest, num - 1 );
}




