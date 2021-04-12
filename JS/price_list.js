let priceListItems = document.querySelectorAll('.price .price-list li');
let priceItems = document.querySelectorAll('.price .price-item');

for(let i = 0;i<priceListItems.length; i++) {     
    priceListItems[i].onclick = function() {
        
        for(let j = 0;j<priceItems.length;j++) {
            priceItems[j].classList.remove('shown');
            priceItems[i].classList.add('shown');
            priceListItems[j].classList.remove('active');
            priceListItems[i].classList.add('active');
        }
                
    }
} 
