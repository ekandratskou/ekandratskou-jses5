 function reverseArray(arr){
    var result = [];
    for(i=0; i<=arr.length; i++){
        result[i]=arr[(arr.length-1)-i]
    
    }
    return result;
}




function reverseArrayInPlace(arr){
  for (var i=0; i< arr.length; i++){
    for (var j=0; j< arr.length; j++){
      while (arr[j]<arr[j+1]) {
        var count=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=count;
      }
    }
  }
  return arr;
}

