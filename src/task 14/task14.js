function stretchCell(inner, width, height){
    this.inner = inner;
    this.width = width;
    this.height = height;
};
stretchCell.prototype.minWidth = function(){
    return this.inner.minWidth();
};
stretchCell.prototype.minHeight = function(){
    return this.inner.Height();
};
stretchCell.prototype.draw = function(width, height){
    return this.inner.draw(width, height)
};