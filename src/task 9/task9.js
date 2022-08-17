function flatter(arr){
    var result = arr.reduce(function(x,y){
        return x.concat(y);
    }, []);
    return result;
};
