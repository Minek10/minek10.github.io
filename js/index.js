//  const scroller = document.getElementById("scroller");


window.onload = function()
{
  $("#navmenu").load("../html/navmenu.html");
  $("#footer").load("../html/footer.html");
};

init();

function init(){
  GetDate();
}

function GetDate(){
  var date = new Date();
  const year = date.getFullYear();
  //console.log(year);
  document.getElementById("actualYear").innerText = year;
}


function MenuHamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

//#region AlertJS

function LevelCV(){
  if (document.body.clientWidth > 576){
    Swal.fire({
      title: 'Levels',
      html: "Read : B1 <br> Write : B1 <br> Speak : A2",
      imageUrl: '../img/dictionnary.jpg',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  
  }else{
    Swal.fire({
      title: 'Levels',
      html: "Read : B1 <br> Write : B1 <br> Speak : A2",
      icon: 'info',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

}
//#endregion

//#region FADE
function fadeOut(){
  const scroller = document.getElementById("scroller");
  if (document.body.clientWidth > 1200){
      scroller.style.transition="0s";
      scroller.style.opacity=0;

      setTimeout(()=>{
          fadeIn();
        },5);
      }
}
    
function fadeIn(){     
      scroller.style.transition="2.0s";
      scroller.style.opacity=1;
}
//#endregion


