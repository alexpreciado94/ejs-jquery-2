$(document).ready(iniciar);

function iniciar(){
    $('button:eq(0)').click(function(){
        alert($('p').text());
    })
    $('button:eq(1)').click(function(){
        $('p').text('fiumba');
    })
    $('button:eq(2)').click(function(){
        $('td').text('NVIDIA RTX 2080');
    })
}