function some(arr, arg){
    return arr.filter(function(num){return !arg(num)}).length != arr.length;
}
function every(arr, arg){
   return arr.filter(function(num){return arg(num)}).length === arr.length;
}
