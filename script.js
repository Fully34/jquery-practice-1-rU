$(document).ready(function() {


//===========================================================================//
                        /* ~~~ PART I ~~~ */ 
//===========================================================================//

    $('.add').click(function() {

        $('body').append('<p> Hello </p>');

    });


    $('.remove').click(function() {

        $('p').last().remove();
    });

    $('.title').click(function() {

        $('body').append('<h1> WHAT UP, FOOL! </h1>');
    });

    $('.rm-title').click(function() {

        $('h1').last().remove();
    });

    $('.add-ul').click(function() {

        $('body').append('<ul> <li> hey </li> <li> yo </li> <li> hi </li> </ul>');
    });

    $('.rm-ul').click(function() {

        $('ul').last().remove();
    });

//===========================================================================//
                        /* ~~~ PART II ~~~ */ 
//===========================================================================//

    $('p').mouseover(function() {

        $(this).css({

            'color' : 'pink',
            'font-size' : '25px'
        });
    });

    $('h1').mouseover(function() {

        $(this).append('!');
    });

    $('a').click(function() {

        $(this)
    });
});