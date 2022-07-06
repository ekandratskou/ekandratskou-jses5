function isEven (N) {
    N = Math.abs(N);
  return (N<2) ?  choose(N): isEven (N - 2);
}


function choose (x) {
  switch (x) {
    case 1: return false;
    case 0: return true;
  }
}
 

