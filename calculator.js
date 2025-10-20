
document.addEventListener('DOMContentLoaded', function() {
    
    const productSelect = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalPriceDiv = document.getElementById('totalPrice');

    
    if (!productSelect) {
        console.error('Элемент #product не найден!');
        return;
    }
    if (!quantityInput) {
        console.error('Элемент #quantity не найден!');
        return;
    }
    if (!calculateBtn) {
        console.error('Элемент #calculateBtn не найден!');
        return;
    }
    if (!totalPriceDiv) {
        console.error('Элемент #totalPrice не найден!');
        return;
    }

    console.log('Все элементы калькулятора найдены. Готов к работе.');

    
    calculateBtn.addEventListener('click', function() {
        console.log('Кнопка "Рассчитать стоимость" нажата.');

        
        const selectedValue = productSelect.value; 
        console.log('Выбранное значение товара:', selectedValue);

        const price = parseInt(selectedValue) || 0; 
        console.log('Цена товара:', price);

        
        const quantity = parseInt(quantityInput.value) || 0; 
        console.log('Количество:', quantity);

        
        const total = price * quantity;
        console.log('Итоговая стоимость:', total);

       
        const formattedTotal = total.toLocaleString('ru-RU');
        totalPriceDiv.textContent = `Стоимость заказа: ${formattedTotal} руб.`;

        console.log('Результат отображён:', totalPriceDiv.textContent);
    });


    productSelect.addEventListener('change', function() {
        console.log('Товар изменён на:', productSelect.value);
    });
});
