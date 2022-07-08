function CountBs(str){
    var count  = 0;
    for (i=0; i<str.length; i++){
        if (str.charAt(i)=='B') {
            count=count+1;
        }
    }
    return count
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


