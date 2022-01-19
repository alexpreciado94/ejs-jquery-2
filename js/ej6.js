$(document).ready(iniciar);

function iniciar(){
    $('button:eq(0)').click(function(){
        $('table').css({
            'border': '1px solid black'
        })
    })
    $('button:eq(1)').click(function(){
        alert($('table').css('border'))
    })
    $('button:eq(2)').click(function(){
        $('table').css({
            'border': 'none'
        })
    })
}