function isEven(N) {
    return (N==0)?  true : (N==1)? false : (N>0)? isEven(N-2) : isEven(Math.abs(N));
    
}

