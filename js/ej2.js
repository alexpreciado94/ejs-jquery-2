$(document).ready(iniciar);

function iniciar(){
    $('tr').click(function(){
        $(this).toggleClass('clic-ejercicio-2');
    })
}