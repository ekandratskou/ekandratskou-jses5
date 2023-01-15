var arr = ["81","87","88"];
var field = document.querySelector("input");
field.addEventListener("keydown", function(event) {
    for(i = 0 ; i <= arr.length; i++){
        if (event.keyCode == arr[i]){
            event.preventDefault();
        };
    };
});

