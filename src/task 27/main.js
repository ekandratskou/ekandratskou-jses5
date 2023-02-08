   var activeTab;
var currentBody;
var arr = document.querySelector("wrapper");
var Predata = Array.from(arr.children);
const data = Object.assign({},Predata); // либо const data = {...Predata};

function switchTab(event) {
    activeTab.classList.remove("selected");
    activeTab = event.target;
    activeTab.classList.add("selected");
    var tabContent = document.querySelector("wrapper");
    currentBody.classList.toggle("hidden");
    var arg = activeTab.textContent;
    for(key in data){
        if(arg == key){
            currentBody = data[key];
        }
    }
    
    currentBody.classList.toggle("hidden");
}
      
        function asTabs(node) {
            var tabLength = node.children.length;
        
            for (var i = 0; i < tabLength; i++) {
                var tabButton = document.createElement("button");
          
                tabButton.textContent = document.querySelectorAll("div")[i].getAttribute("data-tabname");
                node.querySelectorAll("div")[i].classList.add("hidden");
                tabButton.addEventListener("click", switchTab);
                node.insertBefore(tabButton, document.querySelector("div"));
            }

            
            activeTab = document.querySelector("button");
            activeTab.classList.add("selected");

            currentBody = document.querySelector("div");
            currentBody.classList.toggle("hidden");
                
        }
      
        asTabs(document.querySelector("wrapper"));
