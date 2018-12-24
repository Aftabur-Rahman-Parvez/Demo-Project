// / Add to Cart
var count = 0;
var shopping_count = document.getElementById('cart_count');
var success_alert=document.querySelector('.cart-alert-option');
addCountTocart(); //default value
$(".cart_btn").click(function () {
    
    addTocart()

    
});

function addTocart() {
        success_alert.style.display='block';  
        setTimeout(() => {
            success_alert.style.display='none';  
            
        }, 2000);

    count++;
    addCountTocart();
}

function addCountTocart() {
    shopping_count.textContent = `( ${count} )`;
}



// $( ".nav-item1" ).click(function() {
//     $("li.nav-item1::after").style.display='block';
    
//   });


// $("#cart-toggle").click(function () {
    
//     toggleShow();
  
// });

// var te=1;
// function toggleShow(){

//     if(te){
//         $('.buy-item').addClass("cart1");
//         te=0;
//     }else{
//         $('.buy-item').removeClass("cart1"); 
//         te++;
//     }
    
// }


$(document).ready(function(){
    $("#cart-toggle").click(function(){ 
        $(".buy-item").slideToggle(200);
    });


});
