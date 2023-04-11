var w = window.screen.availWidth;
if(w > 1000){
    let text = document.querySelector('.text')
    window.addEventListener('mousemove', function(e){
        let x = e.clientX/ window.innerWidth;
        let y = e.clientY/ window.innerHeight;
        text.style.transform = 'translate(+' + x * 15 + 'px,+' + y * 5 +'px)'; 
    })
}
var w = window.screen.availWidth;
if(w > 1000){
    let BG = document.querySelector('.BG')
    window.addEventListener('mousemove', function(e){
        let x = e.clientX/ window.innerWidth;
        let y = e.clientY/ window.innerHeight;
        BG.style.transform = 'translate(+' + x * 15 + 'px,+' + y * 5 +'px)'; 
    })
}