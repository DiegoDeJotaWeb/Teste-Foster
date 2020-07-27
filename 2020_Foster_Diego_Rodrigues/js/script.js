 document.querySelector("body").onchange = function () {
     sizeOfThings();
 };

 function sizeOfThings() {
     var windowWidth = window.innerWidth;
     //var windowHeight = window.innerHeight;
     //var screenWidth = screen.width;
     //var screenHeight = screen.height;

     //console.log(windowWidth + 'x' + windowHeight);
     //console.log(screenWidth + 'x' + screenHeight);

     if (windowWidth < 768) {
         var menu = document.querySelector('.menu');
         menu.style.foat = 'none';
         var menuLi = document.querySelector('.menu li a');
         var menuLi = document.querySelectorAll('.menu li');
         tamanhoMenu = menuLi.length;
         for (var i = 0; i < tamanhoMenu; i++) {
             var li = menuLi[i];
             li.style.float = 'none';
             li.style.margin = '0';
             li.style.width = '100%';
             document.getElementById('toggle').style.display = 'block';
             document.querySelector('.menu').style.display = 'none';
             document.getElementById('pb').style.marginBottom = '24px';
             var altura = document.querySelector('.bloco-left').offsetHeight;
             document.querySelector('.bloco-right').style.height = 'auto';
         }
     }

     if (windowWidth > 768) {
         var menu = document.querySelector('.menu');
         menu.style.foat = 'none';
         var menuLi = document.querySelector('.menu li a');
         var menuLi = document.querySelectorAll('.menu li');
         tamanhoMenu = menuLi.length;
         for (var i = 0; i < tamanhoMenu; i++) {
             var li = menuLi[i];
             li.style.float = 'left';
             document.getElementById('btn1').style.marginRight = '0.5%';
             document.getElementById('btn2').style.marginRight = '0.5%';
             document.getElementById('btn2').style.marginLeft = '0.5%';
             document.getElementById('btn3').style.marginLeft = '0.5%';
             li.style.width = '32.66%';
             document.getElementById('toggle').style.display = 'none';
             document.querySelector('.menu').style.display = 'block';
             document.getElementById('pb').style.marginBottom = '0px';
             var altura = document.querySelector('.bloco-left').offsetHeight;
             document.querySelector('.bloco-right').style.height = altura + 'px';
         }

     }
 }


 sizeOfThings();

 window.addEventListener('resize', function () {
     sizeOfThings();
 });

 function toggle() {
     document.getElementById('menu').classList.toggle('block');
 }
