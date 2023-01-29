    var activeTab;
    var currentBody;
        function switchTab(event) {
            activeTab.classList.remove("selected");
            activeTab = event.target;
            activeTab.classList.add("selected");
            var tabContent = document.querySelectorAll("div");
            
            currentBody.classList.toggle("hidden");
            if(activeTab.textContent == "one")
                currentBody = tabContent[0];
            if(activeTab.textContent == "two")
                currentBody = tabContent[1];
            if(activeTab.textContent == "three")
                currentBody = tabContent[2];
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
