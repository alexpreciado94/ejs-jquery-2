$(document).ready(iniciar);

function iniciar(){
    $('button').click(function(){
        $('ul:first').toggle();
    })
}