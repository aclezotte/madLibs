$(function(){
    
    $('.jumbotron').hide();
    
    $('button').on('click', function(){
        $('.form-group').hide();
        $('.jumbotron').show();
    });
    
});