var run1 = false;

document.querySelector('img').setAttribute('src', './images/mario.png');
var interval;
function int (){
    var x = 0;
    interval = setInterval(function (){
        x+=1;
        document.querySelector('body').style.backgroundPosition =  x + 'px 494px' ;
    }, 30);
    
}


document.querySelector('body').addEventListener("keydown", run);
function run(event){
    if(event.keyCode == 39 && run1 == false) {
        document.querySelector('img').setAttribute('src', './images/mario_running.gif');
        int();
        run1 = true;
    }
};

document.querySelector('body').addEventListener('keyup', stop);
function stop(event){
    if(run1 == true){
    document.querySelector('img').setAttribute('src', './images/mario.png');
    clearInterval(interval);
    run1 = false;
    
    }
}
