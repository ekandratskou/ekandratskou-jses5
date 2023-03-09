function all(promises) {
return new Promise(function(success, fail) {
    var count = 0;
    var res = promises.map(function(promise, index){
        promise.then(function(result){
            res[index] = result;
            count++;
            if(count == promises.length){
                success(res);
            }
        }).catch(function(err){
           fail(err)
        });
    });
    if(!promises.length){
        success(res);
    };
});
};
                   
// Проверочный код.
all([]).then(function(array) {
console.log("Это должен быть []:", array);
});
function soon(val) {
return new Promise(function(success) {
setTimeout(function() { success(val); },
Math.random() * 1000);
});
}
all([soon(1), soon(2), soon(3)]).then(function(array) {
console.log("Это должен быть [1, 2, 3]:", array);
});
function fail() {
return new Promise(function(success, fail) {
fail(new Error("бабах"));
});
}
all([soon(1), fail(), soon(3)]).then(function(array) {
console.log("Сюда мы попасть не должны ");
}, function(error) {
if (error.message != "бабах")
console.log("Неожиданный облом:", error);
});

