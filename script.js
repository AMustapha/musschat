$(document).ready(function(){
    var visible =true;
    $("input").click(function(){
        var d = $("div").css("display");
        if(d=="none")
         {   
             $("div").fadeIn();
             visible=false;
         }else{
             $("div").fadeOut();
             visible=true;
         }
    });
});