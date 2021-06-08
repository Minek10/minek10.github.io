checkDevice();
footer();

var formation = document.getElementById("educations");
var skills = document.getElementById("skills");
var about =  document.getElementById("about");





function checkDevice(){

    var larg = (document.body.clientWidth);
    console.log(larg);
    
    if (larg > 650){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "./img/middle_screen2.png";
    }

    if (larg > 1080){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "./img/big_screen2.png";
    }

    if (larg > 1366){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "./img/veryBig_screen2.png";
    }
}

function footer(){
    var date = new Date();
    const year = date.getFullYear();
    console.log(year);
    
    document.getElementById("footer").innerText="Designed by Riccardo Carroyer | 2021 - " + year + " |";
}



