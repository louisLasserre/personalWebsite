loader = document.getElementsByClassName("loader");
loader__element = document.getElementsByClassName("loader__element");

var tl = gsap.timeline({});
tl.pause();
tl.set(loader, {
    display: 'block'
}).set(loader__element, {
    transformOrigin: 'center right',
}).to(loader__element, 0.6, {
    scaleX: 1,
    ease: 'expo.inOut',
    stagger: 0.1,
}).set(loader__element, {
    transformOrigin: 'center left',
}).to(loader__element, 0.6, {
    scaleX: 0,
    ease: 'expo.inOut',
    stagger: -0.1,
}).set(loader, {
    display: 'none',
});




function switchToSecond() {
    tl.play(0);
    setTimeout(function(){
        second.classList.remove("getOff");
        second.classList.add("show");
        
    
        main.classList.remove("show");
        main.classList.add("getOff");
        
    }, 1000); 
    

    
    

}

function switchToFirst() {
    tl.play(0); 
    setTimeout(function(){
        main.classList.remove("getOff");
        main.classList.add("show");
        
        
        second.classList.remove("show");
        second.classList.add("getOff");
        
    }, 1000);
     
}

main = document.getElementById("main");
second = document.getElementById("second");


btnOfMain = document.getElementById("btnMain");
btnOfSecond = document.getElementById("btnSecond");

btnOfMain.addEventListener('click', switchToSecond);
btnOfSecond.addEventListener('click', switchToFirst);