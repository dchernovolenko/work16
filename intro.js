 var button = document.getElementById("b")
 var list = document.getElementById("thelist")
 var listeles = document.getElementsByTagName("li")
 var head = document.getElementById("h")

 var buttonfunc = function(){
     var node = document.createElement('li')
    var textnode = document.createTextNode("item " + listeles.length)
    node.appendChild(textnode)
    list.appendChild(node)
    listeles[listeles.length - 1].addEventListener("mouseenter", listfunc);
    listeles[listeles.length - 1].addEventListener("mouseleave", nonlistfunc)
    listeles[listeles.length - 1].addEventListener("click", listdelfunc)
 }

 var listfunc = function(e){
    head.innerHTML = this.innerHTML;
 }

 var nonlistfunc = function(){
     head.innerHTML = "Hello World!";
 }

 var listdelfunc = function(e){
    this.remove();
 }


 button.addEventListener("click", buttonfunc);
 for(var i = 0; i < listeles.length; i++){
    listeles[i].addEventListener("mouseenter", listfunc);
    listeles[i].addEventListener("mouseleave", nonlistfunc)
    listeles[i].addEventListener("click", listdelfunc)
 }
nonlistfunc()
