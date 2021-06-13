checkDevice();


window.addEventListener('resize', checkDevice);
document.getElementById("btnContener").addEventListener('click', alertJs);

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






    









