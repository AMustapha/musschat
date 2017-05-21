$(document).ready(function(){
    var visible =true;
    $("#ChatBtn").click(function(){
        if(visible)
         {   
             $("#holder").fadeOut();
             visible=false;
         }else{
             $("#holder").fadeIn();
             visible=true;
         }
    });
});