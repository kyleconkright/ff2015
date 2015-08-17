$('document').ready(function(){

    function reveal(a, b) {
        $(a).animate({
            'marginTop':b,
            'marginBottom':b,
            'opacity' : 1
        },
            750,
            'swing'
        )
    }

    reveal('#left img', '16px')
    reveal('#right #bio', '0')


});
