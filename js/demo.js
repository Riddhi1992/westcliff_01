$(document).ready(function(){

    /* Open lightbox on button click */
    $('.lightbox-toggle img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }
        var img = $(this).clone();
        $(".box").append(img);
        //Get text content in attribute
        // var $altvalue = $('#album li').attr('class'); //or var altvalue = $(this).attr('alt');

        // if ($altvalue == "photo1") {
        //     var img = $('#album ul li:first-child img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // }
        // else if ($altvalue == "photo2") {
        //     var img = $('#album ul li:nth-child(2) img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // }
        // else if ($altvalue == "photo3") {
        //     var img = $('#album ul li:nth-child(3) img').clone(); //Duplicate DOM element
        //     $('.box').append(img); //Insert duplicated element in another element
        // }
    });
    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});