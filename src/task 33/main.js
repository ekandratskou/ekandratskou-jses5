var butt = document.getElementById("button");
var tArea = document.getElementById("code");
var pre = document.getElementById("output")


function workbench(){
    return new Promise(function(success, fail) {
        var func = new Function(tArea.value);
        var result = func();
        if(result){
            success(result);
        }else fail();
    })
        .then(function(result){pre.textContent = String(result);})
        .catch(function(err){pre.textContent = String(err);})  
};

butt.addEventListener("click", workbench)

