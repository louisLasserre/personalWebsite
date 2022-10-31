


const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


Hpx = window.screen.height;


fleche = document.getElementById("fleche");

boutonFleche = document.getElementById("arrowBtn");

const classes = {
    pinned: "header-pin",
    unpinned: "header-unpin",
    haut: "fleche-haut",
    bas: "fleche-bas",
}


function pin() {
    //mon objet contiens tel class
    if (eleHeader.classList.contains(classes.unpinned)) {
        eleHeader.classList.remove(classes.unpinned)
        eleHeader.classList.add(classes.pinned)


        fleche.classList.remove(classes.bas)
        fleche.classList.add(classes.haut)

    }
    }
function unpin() {
    if (
        eleHeader.classList.contains(classes.pinned) ||
        !eleHeader.classList.contains(classes.unpinned)
    ) {
        eleHeader.classList.remove(classes.pinned)
        eleHeader.classList.add(classes.unpinned)

        //eleHeader.style.top = Hpx - ((60*100)/Hpx) +"px";

        //fleche.style.transform = 'rotate(-180deg)';

        fleche.classList.remove(classes.haut)

        fleche.classList.add(classes.bas)
    }
}






window.onload = function (e){
    eleHeader = document.getElementById("header");
    unpin();
}

H = 0;
window.onscroll = function (e) {
    // called when the window is scrolled.

    var H = window.scrollY;

    if (H > vh-60) {
        pin();
        boutonFleche.onclick = function() {

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });

        };

    }else{

        unpin();
        boutonFleche.onclick = function() {

            window.scrollTo({
                top: vh-59,
                left: 0,
                behavior: 'smooth'
            });
        };
    }
}

//unpin();
