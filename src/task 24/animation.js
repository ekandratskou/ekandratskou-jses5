function animate({duration, draw, timing}) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
        var timeFraction = (time - start) / duration;
        var progress = timing(timeFraction);
        draw(progress);
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        };
    });
};