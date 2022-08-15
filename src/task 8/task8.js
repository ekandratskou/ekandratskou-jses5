function deepEqual(val_1, val_2) {
    if (val_1 === val_2){
        return true;
    }
    if (val_1 == null || val_2 == null || typeof val_1 != 'object' || typeof val_2 != 'object'){
        return false; 
     }  
                 
   for (var prop in val_1) {
    if (val_2.hasOwnProperty(prop) && ! deepEqual(val_1[prop], val_2[prop])) {
        return false; 
    } else {
        return true; 
    }
   }
return true;
}

