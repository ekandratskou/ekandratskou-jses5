var cx = document.querySelector("canvas").getContext("2d");
// Stx,Sty - координаты старта соответственно X и Y
//a - длина верхнего(меньшего) основания трапеции, b - длина нижнего основания трапеции, h -высота трапеции;

function trapezoid(Stx,Sty,a,b,h){
cx.beginPath();
cx.moveTo(Stx,Sty);
cx.lineTo((Stx+b), Sty);
cx.lineTo(Stx+(b-((b-a)/2)), (Sty - h));
cx.lineTo((Stx+((b-a)/2)), (Sty - h));
cx.lineTo(Stx,Sty);
cx.stroke(); 
    
}
//trapezoid(50,70,30,60,30)
//trapezoid(150,70,30,60,30)

//weight - ширина четырехугольника, height - высота четырехугольника, angle -угол поворота координатной оси; 

function diamond(Stx, Sty, weight, height, angle){
    cx.translate(Stx + weight, Sty + weight/3)
    cx.rotate(angle * Math.PI / 180);
    cx.fillStyle = "red";
    cx.fillRect(-weight/2, -height/2, weight, height);
    cx.resetTransform();
}
 //diamond(10, 50, 100, 100, 45)
//diamond(10, 500, 100, 100, 45)

//w - ширина зигзагообразной области, h - высота зигзагообразной области, Hz - частота элементов зигзагообразной области;
function zigzaggingLine(Stx, Sty, w, h, Hz){
    cx.beginPath();
    cx.moveTo(Stx, Sty);
    for (var n = 10; n < h; n += Hz) {
        cx.lineTo((Stx + w),(Sty - n));
        cx.lineTo(Stx, (Sty - (2 + n)));
    }
    cx.stroke();
}
//zigzaggingLine(150, 150, 70, 100, 15);
//zigzaggingLine(50, 150, 70, 100, 15);

//a, b - начальные параметры спирали(начальный радиус и расстояние м/ду витками спирали , ang - угол отклонения спирали, ф-ла спирали Архимеда (X(Y)=(a+bs)cos(s))
function spiral(Stx, Sty, a, b, p){
    cx.beginPath(); 
    cx.moveTo(Stx, Sty);
    for (ang = 0; ang < (Math.PI*8); ang = ang + 0.1) {
        cx.lineTo(Stx + (a + b * Math.pow(ang, p)) * Math.cos(ang), Sty + (a + b * Math.pow(ang, p)) * Math.sin(ang));
    };
    cx.strokeStyle = "black"
    cx.stroke()
}

//spiral(150,150,10,2,0.9);
//spiral(50,150,10,2,0.9);

// R -радиус звезды; col - цвет тела звезды, colB - цвет контура;
function star(Stx, Sty, R, colB, col) {
    cx.beginPath();
    cx.translate(50, 100)
    cx.moveTo(Stx, Sty);
    
    for (let i = 1; i <= 9; i++) {
        var x = Stx + Math.cos(i * Math.PI / 4) * R;
        var y = Sty + Math.sin(i * Math.PI / 4) * R;
      cx.quadraticCurveTo(Stx, Sty, x, y);
    };
    cx.strokeStyle = colB;
    cx.fillStyle = col;
    cx.stroke();
    cx.fill();
};
  //star(340, 0, 60, "gold", "yellow");
  //star(440, 20, 30, "gold", "green");

// n - количество лепестков, Rpet - толщина лепестков; 
function petals(Stx, Sty, n, col, Rpet){
    cx.beginPath();
    cx.translate(Stx, Sty);
    for (var i = 0; i <n; i++) {
        cx.rotate(Math.PI/(n/2));
        cx.moveTo(0, 0);
        cx.arc(30, 70, Rpet, -0.5, Math.PI);
        cx.lineTo(0, 0);
        cx.fillStyle = col;
        cx.fill();
    };
    cx.stroke();
    cx.closePath();
};

//petals(150, 150, 12, "yellow", 20)
//petals(250, 250, 6, "yellow", 20)