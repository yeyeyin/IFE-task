
window.onload=function(){
var queue=[];
var inputNum = document.getElementById("num-input");
var buttonList = document.getElementById("control");
var queueList = document.getElementById("container");

var leftIn = function(){
    var val = getValue();
    queue.unshift(val);
    render();
}

var rightIn = function(){
    var val = getValue();
    queue.push(val);
    render();
}
var rightOut = function(){
    var d=queue.pop();
    render();
}
var leftOut = function(){
    var d=queue.shift();
    render();
}
var getValue=function(){
    var value = inputNum.value;
    return value.trim();
};

var render=function(){
    var htmlstr="";
    for(var key in queue){
        htmlstr+=('<div>'+queue[key]+'</div>');
    }
    queueList.innerHTML=htmlstr;
 
}
    buttonList.addEventListener("click",function(event){
    var target = event.target;
    switch(target.id){
        case 'in-left':
            leftIn();
            break;
        case 'in-right':
            rightIn();
            break;
        case 'out-left':
            leftOut();
            break;
        case 'out-right':
            rightOut();
            break;
        default:
            break;
    }
},false);
};

