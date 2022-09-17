function some(arr, arg){
    return arr.some((item) => arg(item));
}

function every(arr, arg){
   return arr.every((item) => arg(item));
}
