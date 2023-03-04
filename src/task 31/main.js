//https://jsonplaceholder.typicode.com/users
//https://eloquentjavascript.net/author
var requestURL = "https://eloquentjavascript.net/author"
var requestTypes = ["text/plain",
                      "text/html",
                      "application/json",
                      "application/rainbows+unicorns"];

function sendRequest(method, url, body = null){ 
    return new Promise(function(resolve, reject){
        for(key of requestTypes){
            var req = new XMLHttpRequest()
            req.open(method, url)
            req.setRequestHeader("accept", key)
            req.responseType = "text";
            req.onload = function() {
                if (req.status >= 400){
                    reject(req.response)
                } else {
                    resolve(req.response)
                }
            }
            req.onerror = function(){
                reject(req.response)
            }
            req.send(null)
        }
    })
}
      
sendRequest("GET" , requestURL)
    .then(function(data){console.log(data)})
    .catch(function(err){console.log(err)})

/*const body = {
    name: "Eduard",
    age: 40
}

sendRequest("POST" , requestURL, body)
    .then(function(data){console.log(data)})
    .catch(function(err){console.log(err)})

*/