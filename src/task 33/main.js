function workbench(butt, tArea, pre){
    function helper(){
        return new Promise(function(success) {
        var func = new Function(tArea.value);
        var result = func();
        success(pre.textContent = String(result));
       }).catch(function(err){pre.textContent = "Error: " + err;})  
};
    butt.addEventListener("click", helper);
  
};

  workbench(document.getElementById("button"), 
            document.getElementById("code"), 
            document.getElementById("output"));