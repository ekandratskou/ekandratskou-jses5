function some(arr, arg){
    return arr.filter(arg).length >0 ? true : false;
}
function every(arr, arg){
   return arr.filter(arg).length === Object.keys(arr).length;
}
