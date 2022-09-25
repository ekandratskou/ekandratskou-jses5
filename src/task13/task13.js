function Vector(x,y) {
    this.x = x;
    this.y = y;
};

var Vector2 = function (z) {
    return new Vector(this.x + z.x, this.y + z.y);
};
Vector.prototype.plus = Vector2;

 var Vector3 = function (z) {
    return new Vector(this.x - z.x, this.y - z.y);
};
Vector.prototype.minus = Vector3;

var sum = function(){
    return (Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2)))
};

Object.defineProperty(Vector.prototype,"length", {get: sum});



