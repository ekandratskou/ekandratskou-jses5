function some(arr, arg){
    return arr.map(function(num){return arg(num)}).reduce(function(x,y){return(x == y)? true : false});
}

function every(arr, arg){
   return arr.map(function(num){return arg(num)}).reduce(function(x,y){return !(x == y)? false : true});
}
