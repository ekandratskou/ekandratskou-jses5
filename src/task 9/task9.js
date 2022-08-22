function flatter(arr){
    arr.reduce(function(x,y){
        return x.concat(y);
    }, []);
};
