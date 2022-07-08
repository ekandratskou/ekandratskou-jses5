function isEven (N) {
  N = Math.abs(N);
return (N<2) ?  N !== 0 : isEven (N - 2);
}
 

