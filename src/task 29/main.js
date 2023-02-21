var results = [
{name: "Удовлетворён", count: 1043, color: "lightblue"},
{name: "Нейтральное", count: 563, color: "lightgreen"},
{name: "Не удовлетворён", count: 510, color: "pink"},
{name: "Без комментариев", count: 175, color: "silver"}
];
var cx = document.querySelector("canvas").getContext("2d");
var total = results.reduce(function(sum, choice) {
return sum + choice.count;
}, 0);
var currentAngle = -0.5 * Math.PI;
var centerX = 300, centerY = 150;
results.forEach(function(result) {
    var sliceAngle = ((result.count / total) * 2 * Math.PI);
    cx.beginPath();
    cx.font = "16px Georgia"
    cx.arc(centerX, centerY, 100, currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx.lineTo(centerX, centerY);
    cx.fillStyle = "black";
    var anglText = currentAngle - (sliceAngle/2) ;
    //полярные координаты: x = R* cos(angle), y = R* sin(angle)
    cx.fillText(result.name, centerX + (120 * Math.cos(anglText)), centerY + (120 * Math.sin(anglText)));
    cx.textAlign = "right";
    cx.textBaseline= "middle";
    cx.fillStyle = result.color;
    cx.fill();
});