var cx = document.querySelector("canvas").getContext("2d");

function ball(StX, StY, R, Vx, Vy){

    function animation({Sp, draw, timing}) {
        var start = performance.now();
        requestAnimationFrame(function animation(time) {
            var timeFraction = Math.min(150, time - start) / Sp;
            if (timeFraction > 1) timeFraction = 1;
            var progress = timing(timeFraction)
            draw(progress);
            if (timeFraction < 1) {
                requestAnimationFrame(animation);}
        });
    };

animation({Sp: 10000,
         timing: function(timeFraction) {
             return timeFraction;
         },
         draw: function(step) {
             cx.beginPath();
             cx.clearRect(0, 0, 400, 400);
             cx.strokeStyle = "green";
             cx.lineWidth = 2;
             cx.strokeRect(25, 25, 350, 350);
             cx.beginPath();
             cx.moveTo(188, 25);
             cx.lineTo(188, 200);
             cx.strokeStyle = "red";
             cx.stroke(); 
             StX += step * Vx;
             StY += step * Vy;
             if (StX < 25 + R || StX > 375 - R || StX > 188 - R && StY < 220 - R && StX < 188 + R)
                 Vx = -Vx;
             if (StY < 25 + R || StY > 375 - R )
                 Vy = -Vy;
             cx.fillStyle = "yellow";
             cx.beginPath();
             cx.arc(StX, StY, R, 0, 7);
             cx.fill();
         }
        });   
}

//ball(100, 200, 20, 100, 70)



