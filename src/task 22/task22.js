function buildTable(arr){
    var Table = document.querySelector("#table");
    var headers = Object.keys(arr[1]);
    var table =document.createElement("table");
    var headerRow = document.createElement("tr");
    headers.forEach(function (headerText){
        var header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    arr.forEach(function(X){
        var row = document.createElement("tr")
        Object.values(headers).forEach(function(headerText){
            var cell = document.createElement("td");
            if(typeof X[headerText] == "number"){
                cell.style.textAlign = "right"
            }else if(X[headerText] == undefined){
                X[headerText]  = "-";
                cell.style.textAlign = "center";
            }
            cell.textContent= X[headerText];
            row.appendChild(cell);
        })
        table.appendChild(row);
    })
    Table.appendChild(table);
}

       
    
