var arr = ["w","q","x"];
var field = document.querySelector("input");
field.addEventListener("keydown", function(event) {
    var num = String(event.key);
    if(arr.indexOf(num.toLowerCase()) != -1)
        event.preventDefault();
});

 

