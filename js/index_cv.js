console.log("on rfentre dans le js")
checkDevice();

window.addEventListener('resize', checkDevice);
window.addEventListener('resize', btnContact);



// var btnExp = document.getElementById("btnExp");
// var expSection = document.getElementById("expSection");
// var btnEducation = document.getElementById("btnEducation");
// var EducationSection = document.getElementById("EducationSection");
// var btnSkills = document.getElementById("btnSkills");
// var skills = document.getElementById("SkillSection");


const $ = document.querySelector.bind(document);
    
    function fadeOut(el){
        el.style.transition="0s";
        el.style.opacity=0;

        setTimeout(()=>{
            fadeIn(el);
        
        },5);
    }
    
    function fadeIn(el){     
        el.style.transition="2.5s";
        el.style.opacity=1;
    }


   $("#btnEducation").addEventListener("click",()=>{  fadeOut($("#EducationSection"))  });


    $("#btnExp").addEventListener("click",() =>{
        fadeOut($("#expSection"));
        
    });
    $("#btnSkills").addEventListener("click",() =>{
        fadeOut($("#SkillSection"));
    });

    fadeOut($("#EducationSection"));





function checkDevice(){

    var larg = document.body.clientWidth;
    console.log("La largeur est de " + larg);

    if (larg <= 649){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "../img/small_screen2.png";
    }
    
    if (larg >= 650){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "../img/middle_screen2.png";
    }

    if (larg >= 1280){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "../img/big_screen2.png";

        document.getElementById("contactBtn").style.display="none"
        console.log("modification de contact")
        
    }

    if (larg >= 1600){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "../img/big_screen2.png";
    }

    if (larg >= 1920){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "../img/veryBig_screen2.png";
        document.getElementsByClassName("contact")[0].innerText="Me contacter"
        document.getElementById("EducationSection").classList.add("transition");
    }
  
}

function btnContact(){
    var larg = document.body.clientWidth;
    if (larg <= 1280){
      

        document.getElementById("contactBtn").style.display="inline-block"
        console.log("modification de contact")
        
    }
}