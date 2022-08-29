// Déclaration des variable
var  tabImg = document.getElementsByClassName("slideImage");
var etape = 0;
var nbrImg = tabImg.length;

//Function les autres image pour laisser une seule active
function desactivationImg(){
    for (let i = 0; i < nbrImg.length; i++) {
        tabImg[i].classList.remove("active");
        
    }
}

// fonction assurant le défilement automatique des images
setInterval(function(){
    
    etape++;

    if (etape>= nbrImg) {
        etape =0;
        
    }
    desactivationImg();
    tabImg[etape].classList.add("active"); 

}, 2000)



