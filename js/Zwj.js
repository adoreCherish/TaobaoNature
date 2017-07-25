var container = document.getElementById('container');
var boxDiv = document.getElementsByClassName('face');
var audio = document.getElementById('audio');
// var trumpet = document.getElementsByClassName('trumpet');
var radius = caculateRadius(129,20);
console.log('radius:'+radius);
function caculateRadius(length,totalNum){
    return Math.round(length/(2*Math.tan(Math.PI/totalNum)))-3;
}
for(var i=0;i<boxDiv.length;i++){
    boxDiv[i].style.background='url("./img/p'+(i+1)+'.png") no-repeat';
    boxDiv[i].style.webkitTransform = "rotateY("+360/boxDiv.length*i+"deg) translateZ("+radius+"px)"
}
$('.trumpet').on('tap',function(){
    if(audio.paused){
        audio.play();
        $('.trumpet').html('⏸');
    }
    else{
        audio.pause();
        $('.trumpet').html('▶️');
    }
})
var startX= 0,x = 0,endX = 0;
var flag = true;
$('.box').on('touchstart',function(event){
    event.preventDefault();
    console.log('event:'+event);
    var touch = event.targetTouches[0];
    startX = touch.pageX - x;
})
$('.box').on('touchmove',function(event){
    if(flag){
        event.preventDefault();
        console.log('event:'+event);
        var touch = event.targetTouches[0];
        endX = touch.pageX;
        x = endX - startX;
        $('.box').css('transform','rotateY('+x+'deg)');
    }
    else{
        flag = false;
    }
})
window.addEventListener('deviceorientation',function(event){
    var gamma = event.gamma;
    if(Math.abs(gamma)>1){
        $('.box').css('transform','rotateY('+gamma*3+'deg)');
        flag = false;

    }
    else{
        flag = true;
    }
})