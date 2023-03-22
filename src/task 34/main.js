// Строит массив из имён глобальных перменных,
// типа 'alert', 'document', и 'scrollTo'
var terms = [];
for (var name in window)
terms.push(name);

function search(field, sugg){
    function find(words, terms){
        return terms.filter(function(arg){
            var reg = new RegExp(words, "gi");
            return arg.match(reg);
            // для поиска по первым символам
            //return arg.indexOf(field.value) == 0;
        })
    };
    function disp(){
        var opts = find(this.value, terms);
        var ctx = this;
        var tegs = opts.map(function(stat){
        var regu = new RegExp(ctx.value, "gi");
        var nameR = stat.replace(regu, `<span class = "ccc">${ctx.value}</span>`)
        return `<li style = "list-style-type: none"><span>${nameR}</span></li>`;
        }).slice(0,30).join('');
        sugg.innerHTML = this.value ? tegs : null;
    }
    
    field.addEventListener("input", disp)
    sugg.addEventListener("click", function(event){
        field.value = event.target.textContent;
        sugg.textContent = "";
    });
};

search(document.getElementById("field"), document.getElementById("suggestions"));
    


