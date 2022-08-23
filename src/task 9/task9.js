function flatter(arr){
    return arr.reduce(function(x,y){
        return x.concat(y);
    }, []);
};
