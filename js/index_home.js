checkDevice();


window.addEventListener('resize', checkDevice);



function checkDevice(){

    var larg = (document.body.clientWidth);
    console.log("La largeur est de " + larg);

    if (larg < 649){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "../img/small_screen2.png";
    }
    
    if (larg > 650){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "../img/middle_screen2.png";
    }

    if (larg > 1280){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "../img/big_screen2.png";
        
    }

    if (larg > 1650){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "../img/veryBig_screen2.png";
    }
}






    









