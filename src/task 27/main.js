var selectedBut;
var newDiv = document.createElement("div");
var dive = document.querySelector("wrapper");
document.body.onload = addButton;

var data = [{
    tabName: "Home",
    tabContent: "Application landing page"
},{
    tabName: "About",
    tabContent: "Some info about using the Application"
},{
    tabName: "Resources",
    tabContent: "Some additional links and resourses available"
},];

function addButton() {
    // Создаём новый элемент div
    for(var key in data){
        var predate = data[key]; 
        var tabButton = document.createElement("button");
    // Добавляем только что созданный элемент в дерево DOM
        dive.prepend(tabButton);
        tabButton.innerHTML = predate.tabName;
        tabButton.setAttribute('data-tabname', predate.tabName);
    }
    // задаем кнопку "по умолчанию"
    dive.firstChild.classList.add("selected");
    // задаем контент "по умолчанию"
    dive.append(newDiv);
    newDiv.innerHTML = data[2].tabContent;
}
     
function addContent(elem) {
    dive.append(newDiv);
    newDiv.innerHTML = data[elem].tabContent; 
}

function highlight(button) {
    // очищаем подсветку кнопки "по умолчанию"
    dive.firstChild.classList.remove("selected");
    if (selectedBut) { // убрать существующую подсветку, если есть
      selectedBut.classList.remove("selected");
    };
    selectedBut = button;
    selectedBut.classList.add("selected"); // подсветить новый button
};

dive.addEventListener("click", (function(event) {
     for(var key in data){
         if(event.target.textContent == data[key].tabName){
               addContent(key);
         };  
     };
    var target = event.target; // где был клик?
    if (target.tagName != 'BUTTON') return; // не на button? тогда нет
    highlight(target);
}));

