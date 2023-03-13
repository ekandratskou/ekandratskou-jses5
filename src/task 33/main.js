var tArea = document.createElement('textarea');
tArea.value = 'return "Hi"';
tArea.id = "code";
document.body.append(tArea);
var butt = document.createElement('button');
butt.innerHTML = 'Go';
butt.id = "button"
document.body.append(butt);
var pre = document.createElement('pre');
pre.id = "output";
document.body.append(pre);

butt.addEventListener("click", function(){
    var JS = tArea.value;
    var out = document.getElementById("output");
    try{
    var func = new Function(JS);
    var result = func();
    out.textContent = String(result);
    } catch(err){
        out.textContent = String(err);
    }
});

