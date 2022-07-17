    
function range(start, end, step){
    var result = [];
        (step == undefined)? step = 1:num = Math.abs((end - start)/ step )+1;
    if(start>end){
        for(var i=end; i<=num; i++){
        result.push(start);
        start = start + step;
        }
    }
    else {
        for(var i=start; i<=num; i++){
        result.push(start);
        start = start + step;
        }
    }
    return result;
}


 function sum(){
     var result = arr.reduce((x, y) => x + y);
     return result;
}  

