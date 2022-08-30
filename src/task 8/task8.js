function deepEqual(val_1, val_2) {
    if (val_1 === null && val_2 === null){return false;}
    if (val_1 === val_2){return true;}
    if (typeof val_1 != "object" || val_1 == null || typeof val_2 != "object" || val_2 == null) {return false;}
    if (Object.keys(val_1).length != Object.keys(val_2).length){return false;}
              
   for (var prop in val_2) {
    if (!(val_1.hasOwnProperty(prop)) || !deepEqual(val_1[prop], val_2[prop])) {
        return false;
    } return true;
   }
}
