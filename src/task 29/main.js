var results = [
{name: "Удовлетворён", count: 1043, color: "lightblue"},
{name: "Нейтральное", count: 563, color: "lightgreen"},
{name: "Не удовлетворён", count: 510, color: "pink"},
{name: "Не удовлетворён", count: 150}
];
var cx = document.querySelector("canvas").getContext("2d");

function chartPie(R, centerX, centerY){
    var total = results.reduce(function(sum, choice) {
        if(choice.count == undefined){
            choice.count = 0;
        };
        return sum + choice.count;
    }, 0);
    var currentAngle = -0.5 * Math.PI;
    var red = RandomColor(255);
    var green = RandomColor(255);
    var blue = RandomColor(255);
    
    function RandomColor(num) {
        return Math.floor(Math.random() * Math.floor(num));
    };
    //Legend results.hasOwnProperty(‘name’) 
    for (i=0; i<results.length; i++){
        if(results[i].hasOwnProperty("name") == false) {
            results[i].name = "-"
        };
        if(results[i].hasOwnProperty("color") == false) {
            cx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")"
        };
        cx.fillStyle = results[i].color;
        cx.fill();
        cx.fillRect(centerX - 250, centerY - 50 +(i * 30), 10, 10);
        cx.fillStyle = "black";
        cx.fillText(results[i].name + "   " + results[i].count, centerX - 230, centerY - 50 + ((i * 30)+10));
    };
    results.forEach(function(result) {
        var sliceAngle = ((result.count / total) * 2 * Math.PI);
        cx.beginPath();
        cx.arc(centerX, centerY, R, currentAngle, currentAngle + sliceAngle);
        currentAngle += sliceAngle; console.log(R)
        cx.lineTo(centerX, centerY);
        if(result.color == undefined) {
            cx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")"
        };
        cx.fillStyle = result.color;
        cx.fill();
        cx.font = "16px Georgia"
        cx.fillStyle = "black";
        var anglText = currentAngle - (sliceAngle/2) ;
    //полярные координаты: x = R* cos(angle), y = R* sin(angle)
        var labelText = Math.round(R * result.count /total);
        if(result.count>0){
        cx.fillText(labelText + "%", centerX + (60 * Math.cos(anglText)), centerY + (60 * Math.sin(anglText)));
        cx.textAlign = "center";
        cx.textBaseline= "middle";
        }
        if(result.count == undefined){
            labelText = "-"
        };
    });
};

//chartPie(100, 300, 150);