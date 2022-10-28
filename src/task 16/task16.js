function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
if (Math.random() < 0.5)
return a * b;
else
throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  
for (;;) {
    try {
 return primitiveMultiply(a, b);
     break;
} catch (e) {
   if (e instanceof  MultiplicatorUnitFailure)     
MultiplicatorUnitFailure();
   else
    throw e;   
        
}
}
}