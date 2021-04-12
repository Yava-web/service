// let but = document.querySelector('.to-call');
// let modal = document.querySelector('.modal-order.to-call');
// let closeBut = document.getElementById('#1');
// console.log(but);
// console.log(modal);
// console.log(closeBut);
// but.onclick = function() {
//     modal.style.display = 'block';
// }

// closeBut.onclick = function() {
//     modal.style.display = 'none';
// }

$(document).ready(function () {
    $(".to-call").on('click', function () {
        
        $(".modal-call").css("display", "block");
        $(".dark-bg").css("display", "block");        
        
        $(".close-call").on('click', function() {        
            $(".modal-call").css("display", "none");
            $(".dark-bg").css("display", "none");        
        });
    });       

});