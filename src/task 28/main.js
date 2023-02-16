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
//trapezoid(10,70,30,60,40)

//weight - ширина четырехугольника, height - высота четырехугольника, angle -угол поворота координатной оси; 

function diamond(Stx, Sty, weight, height, angle){
    cx.translate(Stx + 100, Sty+10)
    cx.moveTo(Stx, Sty);
    cx.rotate(angle * Math.PI / 180);
    cx.fillStyle = "red";
    cx.fillRect(Stx, Sty, weight, height);
    cx.resetTransform();
}
 //diamond(10, 50, 100, 100, 45)

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
//zigzaggingLine(30, 200, 70, 100, 10);

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

//spiral(110,110,15,4,1);


function star(Stx, Sty, col){
    cx.beginPath();
    for(i=0; i<360; i=i+45){
        cx.translate(Stx, Sty);
        cx.rotate((Math.PI / 180) * i);
        cx.translate(-Stx, -Sty);
        cx.moveTo(10, 90);
        cx.quadraticCurveTo(Stx, Sty, 100, 100);
        cx.lineTo(Stx, Sty);
        cx.strokeStyle = col;
        cx.fillStyle = col;
        cx.fill();
        cx.closePath();
        cx.stroke();
    }
}
//star(60,50, "yellow")
 




