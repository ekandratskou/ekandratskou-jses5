function isEven(N) {
    if (N == 0) {
        return true
    }
    else if (N == 1){
        return false
    } 
    else if (N>0){
        return isEven(N-2)
    }
    else {
        return isEven(-N)
    }
} 
