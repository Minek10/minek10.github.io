checkDevice();
footer();
educationsDiv();

var educationsBtn = document.getElementById("btnEducation");
var educations = document.getElementById('educations')
var skillsBtn = document.getElementById("btnSkills");
var skills = document.getElementById("skills");
var aboutBtn =  document.getElementById("aboutBtn");
var about = document.getElementById('about')

educationsBtn.addEventListener('click', educationsDiv());
skillsBtn.addEventListener('click', skillsDiv());


function educationsDiv(){
    console.log("display none skills : ")
    educations.style.display="block";
    skills.style.display="none";
    
}

function skillsDiv(){
    console.log("display none education : ")
    skills.style.display="inline-block";
    educations.style.display="none";
    about.style.float="right";
}
    


function checkDevice(){

    var larg = (document.body.clientWidth);
    console.log("La largeur est de " + larg);

    if (larg > 649){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "./img/small_screen2.png";
    }
    
    if (larg > 650){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "./img/middle_screen2.png";
    }

    if (larg > 1280){
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





    









