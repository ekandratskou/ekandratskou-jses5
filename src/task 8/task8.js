function deepEqual(val_1, val_2) {
    if (val_1 === val_2){
        return true;
    }
    if (val_1 == null || val_2 == null){
        return false; 
     }  
    if (typeof val_1 != 'object' || typeof val_2 != 'object'){
        return false;
    }
             
    var obj_1 = 0;
    var obj_2 = 0;

    for(var char in val_1){
          obj_1 = obj_1 +1;  
        }
    for(var char in val_2){
          obj_2 = obj_2 +1;  
        if(!(char in val_1) || !deepEqual( val_1[char], val_2[char] )){
            return false;
        }
    }
        return obj_1 === obj_2;
        
 }


