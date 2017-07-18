// jquery
$(document).ready(function() {
    $('.svcAll').hover(function() {
        if($('.svcOne').hasClass('svcLrg')) {
            $('.svcOne').removeClass('svcLrg');
            $('.svcOne').addClass('svcSml');
        } else if($('.svcTwo').hasClass('svcLrg')) {
            $('.svcTwo').removeClass('svcLrg');
            $('.svcTwo').addClass('svcSml');
        } else if($('.svcThree').hasClass('svcLrg')) {
            $('.svcThree').removeClass('svcLrg');
            $('.svcThree').addClass('svcSml');
        } else if($('.svcFour').hasClass('svcLrg')) {
            $('.svcFour').removeClass('svcLrg');
            $('.svcFour').addClass('svcSml');
        }
        
        $(this).toggleClass('svcSml svcLrg');
        
    });

});



