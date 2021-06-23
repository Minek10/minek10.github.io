checkDevice();

var btnText = document.getElementById('btnTranslate');
var imgContact = document.getElementById("imgContact");

window.addEventListener('resize', checkDevice);
document.getElementById("btnContener").addEventListener('click', alertJs);
document.getElementById("btnTranslate").addEventListener('click', checkLanguage);


function alertJs(){
    // Swal.fire(
    //     '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <b><i class="fa fa-phone-square" aria-hidden="true"></i></b> : 0499 27 18 30</span><br>',
    //     '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <b><i class="fa fa-envelope" aria-hidden="true"></i></b> <a href="mailto:riccardo_carroyer@hotmail.be" > : riccardo_carroyer@hotmail.be</a></span><br>',
    //   )

    if (document.body.clientWidth > 500){
        Swal.fire({
            html: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <b><div id="alert"<i class="fa fa-phone-square" aria-hidden="true"></i></div></b> <br>0499 27 18 30</span><br><b> <div id="alert"><i class="fa fa-envelope" aria-hidden="true"></i></div></b> <a href="mailto:riccardo_carroyer@hotmail.be">riccardo_carroyer@hotmail.be</a></span><br>   <div id="alert"><i class="fa fa-linkedin-square"></i></div><a href="https://www.linkedin.com/in/riccardo-carroyer-425092208/"> Linkedin',
            imageUrl: './img/labtop_smartphone.jpg',
            confirmButtonText: 'OK',
            confirmButtonColor: 'rgb(142,166,155)',
          })
    }else{
           Swal.fire({
                html: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <b><div id="alert"<i class="fa fa-phone-square" aria-hidden="true"></i></div></b> <br>0499 27 18 30</span><br><b> <div id="alert"><i class="fa fa-envelope" aria-hidden="true"></i></div></b> <a href="mailto:riccardo_carroyer@hotmail.be">riccardo_carroyer@hotmail.be</a></span><br>   <div id="alert"><i class="fa fa-linkedin-square"></i></div><a href="https://www.linkedin.com/in/riccardo-carroyer-425092208/"> Linkedin',
                confirmButtonText: 'OK',
                confirmButtonColor: 'rgb(142,166,155)',
            })
    }
}



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

function checkLanguage(){
    var flag = document.getElementById('btnTranslate').lastElementChild.attributes[2];
    var btnText = document.getElementById('btnTranslate');
    console.log(flag);

    if (flag.nodeValue =="flag_uk"){
        console.log("Change to uk");
        btnText.innerHTML='<img src="./img/flag_fr.png" id="flag" tag="flag_fr">'
        translate();
        console.log("on revient dans Change to uk");
    }
    if (flag.nodeValue =="flag_fr"){
        console.log("Change to fr");
        btnText.innerHTML='<img src="./img/flag_uk.png" id="flag" tag="flag_uk">'
        document.location.reload();


    }
}

function removeTranslation(){
    document.getElementById("aboutBtn").classList.remove("btnAbout");
    //document.classList.remove("btnProject");
}

function translate(){

    // banner
    document.getElementsByClassName('btnAbout')[0].innerHTML="About me";
    document.getElementById('btnProject').innerText="Projects"

    //hello
    document.getElementById('hello').innerHTML=
    `Hello and welcome everyone ! <br><br> My name is <br>
    <div id="name"><b>Riccardo Carroyer</b></div> <img id="profileImg" src="./img/riccarde_tr.png" alt="">`;


    //Section aboutMe
    document.getElementsByClassName('aboutMe')[0].innerHTML="<z>|</z> About me <z>|</z>";
    document.getElementById('txtAboutMe').innerHTML=` <img src="./img/bitmoji_pc_tr.png" alt="" id="imgAbout"> <br>
    <p> Passionate about computer tools from a young age, I quickly started my first websites with the FrontPage software of the Office suite, I was Webmaster of my football team at 11 years old !
    As soon as I had the opportunity, I chose an IT orientation at school, where I learned the maintenance, assembly, installation, administration of Windows, Windows Server and some Linux distributions. </p>
    <p> In the continuity of this learning, I successfully completed a bachelor's degree in IT Management, where I gained some work experience with a few tools as well as a work methodology.
    This, in turn, taught  me to work with databases, programming mechanisms but also the analysis and design of a project.</p>
    <p> Following this graduate course, I had the opportunity to be selected for a 6 month training of 40 hours a week as a "Full stack NodeJS" developer organized by Cefora-Téchnocité.
    This allowed me to further professionalize my perception and my working methods. </p>
    <p> I am a patient and autonomous person but I do not hesitate to seek advice or a tip from an experienced colleague when I am facr difficulties or have questions.
     Teamwork is indeed important to me. </p>`;

    //Table left
    document.getElementsByClassName('nameTable')[0].innerText="Name";
    document.getElementsByClassName('birthTable')[0].innerText="Born on";
    document.getElementsByClassName('countryTable')[0].innerText="Country";
    document.getElementsByClassName('nationalityTable')[0].innerText="Nationality";
    document.getElementsByClassName('cityTable')[0].innerText="City";
    document.getElementsByClassName('hobbiesTable')[0].innerText="Hobbies";
    document.getElementsByClassName('telTable')[0].innerText="Telephone";
    document.getElementsByClassName('diplomasTable')[0].innerText="Diplomas";
    document.getElementsByClassName('mediaTable')[0].innerText="Medias";

     //Table left
    document.getElementsByClassName('birthTableAnswer')[0].innerText="23 january 1992";
    document.getElementsByClassName('countryTableAnswer')[0].innerText="Belgium";
    document.getElementsByClassName('nationalityTableAnswer')[0].innerText="Belgian";
    document.getElementsByClassName('hobbiesTableAnswer')[0].innerHTML="- New technologies<br>- Football supporter <br>- Walking <br>- Retro Gaming <br>";
    document.getElementsByClassName('diplomasTableAnswer')[0].innerHTML=`- Secondary school diploma as " IT Technician" <br>- IT Management Bachelor`;

    //Section languages
    document.getElementsByClassName("languagesSection")[0].innerHTML="<z>|</z> The languages ​​used <z>|</z>";

    //Section soft
    document.getElementsByClassName("softwaresSection")[0].innerHTML="<z>|</z> The software used <z>|</z>";

    //Section DB
    document.getElementsByClassName("bdSection")[0].innerHTML="<z>|</z> The DB engines used <z>|</z>";

    //Section Contact
    document.getElementsByClassName("contactSection")[0].innerHTML="<z>|</z> Contact me <z>|</z>";
    document.getElementsByClassName("contactMe")[0].innerHTML=
    `<p>Don't hesitate to contact me if my profile interests you or if you have any questions,
    I will be more than happy to answer them !</p>
    <img src="./img/bitmoji_tel_tr.png" alt="" id="imgContact">` 
    document.getElementsByClassName("btnContact")[0].innerText="Contact me"
}






    









