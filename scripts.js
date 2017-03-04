$(function(){
    
    $.backstretch("images/seigaiha.png");
    
    $('.jumbotron').hide();
    
    $('button').on('click', function(){
        $('.form-group').hide();
        $('.jumbotron').show();
    });
    
});