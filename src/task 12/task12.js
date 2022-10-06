function some(arr, arg){
    return !(Object.keys(arr.filter(function(num){return !arg(num)})).length === Object.keys(arr).length);
}
function every(arr, arg){
   return Object.keys(arr.filter(function(num){return arg(num)})).length === Object.keys(arr).length;
}
