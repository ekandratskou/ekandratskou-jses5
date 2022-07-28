    
function range(start, end, step){
    var result = [];
    var num = Math.abs((end - start)/ step)+1;
        step = (undefined)?  1 :  step;
        for(i = (start<end)? i=start : i=end-1; i<=num; i++){
            result.push(start);
            start = start + step;
        }
    return result;
}

function sum(){
     var result = arr.reduce((x, y) => x + y);
     return result;
}  