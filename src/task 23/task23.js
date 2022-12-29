function byTagName(node, tagName){
        var res =[];
        tagName = tagName.toUpperCase();
        if (node.nodeType == 1){
            for (var i = 0; i < node.children.length; i++) {
                if(node.children[i].nodeName == tagName){
                    res.push(node.children[i].nodeName);
                }
                if(node.children[i]){
                    res = res.concat(byTagName(node.children[i], tagName));
                }
            }
        }
        return res;
}; 
    
    
 
   


