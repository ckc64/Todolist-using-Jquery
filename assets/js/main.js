$("ul").on("click","li",function(){
    $(this).toggleClass('completed');
});

$("ul").on("click","span",function(e){
 
    $(this).parent().fadeOut("500",function(){$(this).remove();});
    e.stopPropagation();

});

$("input[type='text']").on("keypress",function(e){
    if(e.which===13){
        var newItem=$(this).val();
        $(this).val("");
        //adding new LI or Item
        $('ul').append("<li><span><i class='fas fa-trash-alt'></i> </span>"+newItem+"</li>");
        
    }
});

