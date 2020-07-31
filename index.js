$(document).ready(function(){

    
    $bar = $('.sidebar');
    $icon = $('.menu-icon');

    /**click event on toggle menu */
    $icon.click(function(){
        $bar.toggleClass('click');
        $icon.toggleClass('icon');
       
    });
  
    $a = $('.a');
    $s1 = $('.s1');
    $h1 = $('.h1');
    $i = $('.i');
    $s2 = $('.s2');
    $h2 = $('.h2');

    $a.toggleClass('change-logo');
    $s1.toggleClass('change-logo');
    $h1.toggleClass('change-logo');
    $i.toggleClass('change-logo');
    $s2.toggleClass('change-logo');
    $h2.toggleClass('change-logo');

   //AOS inherit

   AOS.init();
});