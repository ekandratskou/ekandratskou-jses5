function some(arr, arg){
    for(i=0; i<arr.length; i++){
        while(arg(arr[i])){
            return true;
        }
    }return false;
}

function every(arr, arg){
    for(i=0; i<arr.length; i++){
        while(!arg(arr[i])){
            return false;
        }
    }return true;
}
