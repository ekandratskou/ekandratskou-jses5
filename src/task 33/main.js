var butt = document.getElementById("button");
var tArea = document.getElementById("code");
var pre = document.getElementById("output")


function workbench(){
    return new Promise(function(success) {
        var func = new Function(tArea.value);
        var result = func();
        success(pre.textContent = String(result));
       }).catch(function(err){pre.textContent = "Error: " + err;})  
};

butt.addEventListener("click", workbench)

