document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM fully loaded and parsed');

    const player = document.querySelector('#player');
    
    document.addEventListener('keydown', function(event){
        console.log(event);
        if(event.keyCode == 37){
            console.log('Left');
            player.style.left = player.offsetLeft - 10 + 'px';
        }
        if(event.keyCode == 38){
            console.log('Up');
            player.style.top = player.offsetTop - 10 + 'px';
        }
        if(event.keyCode == 39){
            console.log('Right');
            player.style.left = player.offsetLeft + 10 + 'px';
        }
        if(event.keyCode == 40){
            console.log('Down');
            player.style.top = player.offsetTop + 10 + 'px';
        }
    })
})