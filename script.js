$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            // the " and ' are interchangeable in js
            $(".navbar").removeClass("sticky")
        }
    })
});
