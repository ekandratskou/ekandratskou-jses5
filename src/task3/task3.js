function isEven (N) {
    N = Math.abs(N);
  return (N<2) ?  Boolean(N): isEven (N - 2);
}



