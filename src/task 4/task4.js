function CountBs(str){
       return CountChar(str, "B")
}

function CountChar(str, Nth){
    var count  = 0;
    for (i=0; i<str.length; i++){
        if (str.charAt(i)==Nth) {
            count=count+1;
        }
    }
    return count
}


