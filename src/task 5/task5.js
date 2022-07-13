function range(start, end){
    var result = [];
    for(i=start; i<=end; i++){
        result.push(i);
    }
    return result;
}

            
function sum(array){
    var result = 0;
    for(j=0; j<array.length; j++){
        result = result + array[j];
    }
return result;
}


function range(start, end, step){
    var result = [];
    if(step == undefined){
        step = 1;
    }
    var num = Math.abs((end / step )-1);
    for (var i = 0; i<= num; i++){
        result.push(start);
        start = start + step;
    }
    return result;
}

            