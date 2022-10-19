function Iter(val) {
    this.val = val;
    var counter = 0;

    Object.defineProperty(this, "next", {
      get: function() {
        if (counter === (val.length - 1)){
          this.done = true;
        }
        counter += 1;
        return this.val[counter - 1];
      }
    });
    Object.defineProperty(this, "done", {
      value: false,
      writable: true
    });
  }

  function logFive(seq) {
    for (var i = 0; i <= 4; i++) {
      if (!seq.done) { console.log(seq.next); }
    }
  }

  function ArraySeq(arr) {
    Iter.call(this, arr);
  }

  function RangeSeq(from, to) {
    var arr = [];
    for (var i = from; i < to; i++){
      arr.push(i);
    }
    Iter.call(this, arr);
  }

  
