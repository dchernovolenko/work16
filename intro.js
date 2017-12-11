 var button = document.getElementById("b")
 var button2 = document.getElementById("b2")
 var list = document.getElementById("thelist")
 var list2 = document.getElementById("fiblist")
 var listeles = list.getElementsByTagName("li")
 var listeles2 = list2.getElementsByTagName("li")
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
var fib = function(num){
    if (num <= 1) return 1;
    return fib(num - 1) + fib(num - 2);
}

 var buttonfunc2 = function(){
        var node = document.createElement('li')
       var textnode = document.createTextNode(fib(listeles2.length))
       node.appendChild(textnode)
        list2.appendChild(node)
       listeles2[listeles2.length - 1].addEventListener("mouseenter", listfunc);
       listeles2[listeles2.length - 1].addEventListener("mouseleave", nonlistfunc)
       listeles2[listeles2.length - 1].addEventListener("click", listdelfunc)
    }
 button.addEventListener("click", buttonfunc);
 button2.addEventListener("click", buttonfunc2);
 for(var i = 0; i < listeles.length; i++){
    listeles[i].addEventListener("mouseenter", listfunc);
    listeles[i].addEventListener("mouseleave", nonlistfunc)
    listeles[i].addEventListener("click", listdelfunc)
 }
nonlistfunc()
