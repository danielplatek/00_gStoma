document.addEventListener('DOMContentLoaded', function (e) {

   var menu      = document.querySelector('.menu');
   var hamburger = document.querySelector('.hamburger');


   hamburger.addEventListener('click', function(e){
       // e.preventDefault();
       e.stopPropagation();

       if (menu.classList.contains('hidden')) {
           menu.classList.remove('hidden');
       }else{
           menu.classList.add('hidden');
       }
   });

    menu.addEventListener("click", function(e){
        if (!menu.classList.contains('hidden')) {
             menu.classList.add('hidden');
        }
    });
});


