 function reverseArray(arr){
    var result = [];
    for(i=0; i<=arr.length; i++){
        result[i]=arr[(arr.length-1)-i]
    
    }
    return result;
}




function reverseArrayInPlace(arr){
    for ( i =0; i < Math.floor( arr.length / 2 ) ; i++ ) {
  	var count = arr[i];
    var check = (arr.length-1)-i;
    arr[i] = arr[check];
    arr[check] = count;
  }
}
