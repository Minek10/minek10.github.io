init();


window.addEventListener('resize', checkDevice);
window.addEventListener('resize', btnContact);

var language = document.getElementById("languagesSwitch")
var CV = document.getElementById("CVLink")

document.getElementById("CVLink").addEventListener('click', checkLanguageCV) 


//transition de pages
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

    if (larg >= 1260){
        console.log(larg);
        var image = document.getElementById("screenModeImg");
        image.src = "../img/big_screen2.png";

        document.getElementById("contactBtn").style.display="none"
        console.log("modification de contact")
        document.getElementsByClassName("contact")[0].innerText="Me contacter"
        //document.getElementsByClassName("contact")[0].display.style.textDecoration="none";
        document.getElementById("EducationSection").classList.add("transition");
        
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

    }
  
}

function btnContact(){
    var larg = document.body.clientWidth;
    if (larg < 1260){
      

        document.getElementById("contactBtn").style.display="inline-block"
        console.log("modification de contact")
        var contact = document.getElementsByClassName("contact");
        contact[0].innerHTML= ` <z>|</z> Contact <z>|</z>`
        contact[0].style.textDecoration = "underline overline rgb(142,166,155)";
        contact[0].style.fontFamily = "Segoe UI', Tahoma, Geneva, Verdana, sans-serif"; 
        
    }
}

function checkLanguageCV() {

    console.log(language.value)

    if (language.value =="en"){
        CV.href="../att/CV_ENG.pdf";
    }

    if (language.value =="fr"){
        CV.href="../att/CV.pdf";
    }
}

function footer(){
    var date = new Date();
    const year = date.getFullYear();
    console.log(year);
    
    document.getElementById("footer").innerText="Designed by Riccardo Carroyer | 2021 - " + year + " |";
}

function init(){
    
    console.log("init")
    const btnSwitch = document.querySelector('#languagesSwitch');
    const initLabelsSwitch = () => {
        btnSwitch.innerHTML = '';



        AVAILABLE_LANGUAGES.forEach(language => {
            const option = document.createElement('option');
            option.value = language;
            option.innerText = language.toUpperCase();
            option.selected = language === currentLanguage;
            btnSwitch.appendChild(option);
            console.log("language avaible")
        });

        setLabels(currentLanguage);
    };


    btnSwitch.addEventListener('change', (event) => {
        currentLanguage = event.target.value;
        initLabelsSwitch();
    });

    footer();
    checkDevice();
    initLabelsSwitch();
}