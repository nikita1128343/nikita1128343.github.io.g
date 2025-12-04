document.addEventListener('DOMContentLoaded', function() {

    const quantityInput = document.getElementById('quantity');
    const serviceTypeRadios = document.querySelectorAll('input[name="serviceType"]');
    const optionsSection = document.getElementById('optionsSection');
    const optionsSelect = document.getElementById('options');
    const propertySection = document.getElementById('propertySection');
    const propertyCheckbox = document.getElementById('property');
    const priceValue = document.getElementById('priceValue');
    
   
    const basePrices = {
        basic: 1000,
        standard: 2000,
        premium: 3000
    };
    

    function calculateTotal() {
        
        let selectedType = 'basic';
        let typePrice = basePrices.basic;
        
        for (const radio of serviceTypeRadios) {
            if (radio.checked) {
                selectedType = radio.value;
                typePrice = basePrices[selectedType];
                break;
            }
        }
        
        
        const quantity = parseInt(quantityInput.value) || 0;
        
        
        let optionPrice = 0;
        if (selectedType === 'standard' && optionsSection.style.display !== 'none') {
            optionPrice = parseInt(optionsSelect.value) || 0;
        }
        
       
        let propertyPrice = 0;
        if (selectedType === 'premium' && propertySection.style.display !== 'none' && propertyCheckbox.checked) {
            propertyPrice = parseInt(propertyCheckbox.value) || 0;
        }
        
       
        const total = (typePrice + optionPrice + propertyPrice) * Math.max(quantity, 0);
        
        
        priceValue.textContent = total.toLocaleString('ru-RU');
    }
    
   
    function updateVisibility() {
       
        let selectedType = 'basic';
        for (const radio of serviceTypeRadios) {
            if (radio.checked) {
                selectedType = radio.value;
                break;
            }
        }
        
    
        if (selectedType === 'basic') {
            
            optionsSection.style.display = 'none';
            propertySection.style.display = 'none';
        } else if (selectedType === 'standard') {
            
            optionsSection.style.display = 'block';
            propertySection.style.display = 'none';
        } else if (selectedType === 'premium') {
            
            optionsSection.style.display = 'none';
            propertySection.style.display = 'block';
        }
    }
    
    
    updateVisibility();
    calculateTotal();
    
    
    serviceTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            updateVisibility();
            calculateTotal();
        });
    });
    
    
    quantityInput.addEventListener('input', calculateTotal);
    
   
    optionsSelect.addEventListener('change', calculateTotal);
    
   
    propertyCheckbox.addEventListener('change', calculateTotal);
    
   
    quantityInput.addEventListener('keyup', calculateTotal);
});
