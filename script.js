$(document).ready(function() {

'use strict'
//===========================================================================//
                        /* ~~~ PART I ~~~ */ 
//===========================================================================//

//============================== Dynamic text ==============================//
        
    $('.add').click(function() {

        $('body').append('<p> Hello </p>');
    });


    $('.remove').click(function() {

        $('p').last().remove();
    });

//============================== Dynamic Title ==============================//
        
    $('.title').click(function() {

        $('body').append('<h1> WHAT UP, FOOL! </h1>');
    });

    $('.rm-title').click(function() {

        $('h1').last().remove();
    });


//============================== Dynamic List ==============================//
        
    $('.add-ul').click(function() {

        $('body').append('<ul> <li> hey </li> <li> yo </li> <li> hi </li> </ul>');
    });

    $('.rm-ul').click(function() {

        $('ul').last().remove();
    });

//===========================================================================//
                        /* ~~~ PART II ~~~ */ 
//===========================================================================//

//========================= Change that <p> to pink =========================//
        
    $('body').on('mouseover', 'p', function() {

        $(this).css({

            'color' : 'pink',
            'font-size' : '25px'
        });
    });


//============================== Adding "!" ==============================//
        
    $('h1').mouseover(function() {

        $(this).append('!');
    });


//============================== Link Stuff ==============================//
        
    $('a').click(function() {

        if ( !confirm('Are you sure you want to go there?!') ) {

            $(this).remove();
            return false;
        }
    });


//===========================================================================//
                        /* ~~~ PART III ~~~ */ 
//===========================================================================//

//============================ Click le Button ==============================//

    $('.popup').click(function() {

        $('body').append('<div class="pop-container"><div class="center-pop"></div></div>');

//============================== Style Popup ==============================//
        $('.pop-container').css({

            'background-color': 'rgba(0,0,0,0.9)',
            'height': '100%',
            'width': '100%',
            'position': 'fixed',
            'top': '0',
            'left': '0',
        });

        $('.center-pop').css({

            'position' : 'absolute',
            'top' : '50%',
            'transform' : 'translatey(-50%)',
            'margin-right' : '25%',
            'margin-left' : '25%',
            'height' : '300px', 
            'width' : '50%',
            'border' : '1px solid black',
            'background-color' : '#ed828d',
        });

//========================== Add close button ==============================//
        
        $('.center-pop').append('<a class = "close" href="#">close</a>');

//============================== Close popup ==============================//
        
        $('.close').on('click', function () {

            $('.center-pop').remove();
            $('.pop-container').remove();
        });
    });
});