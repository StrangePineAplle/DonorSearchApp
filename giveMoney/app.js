let donation = document.getElementById("donation");
let top = document.getElementById("top");
let blood = document.getElementById("blood");
let money = document.getElementById("money");
let selectedType = '';
let selectedAmount = null;

function selectDonationType(type) {
    selectedType = type;

    // Убираем выделение с кнопок
    document.getElementById('one-time').classList.remove('selected');
    document.getElementById('monthly').classList.remove('selected');

    // Подсвечиваем выбранную кнопку
    document.getElementById(type).classList.add('selected');
}

function selectAmount(amount) {
    selectedAmount = amount;

    // Убираем выделение с всех кнопок
    const buttons = document.querySelectorAll('.amount');
    buttons.forEach(button => button.classList.remove('selected'));

    // Подсвечиваем выбранную сумму
    const selectedButton = Array.from(buttons).find(button => button.innerText === `${amount} р`);
    
    if (selectedButton) {
        selectedButton.classList.add('selected');
        document.getElementById('custom-amount').value = ''; // Очищаем поле для ввода своей суммы
    }
}

function donate() {
    const customAmount = document.getElementById('custom-amount').value;

    // Если введена своя сумма, используем её
    const amountToDonate = customAmount ? customAmount : selectedAmount;

    if (amountToDonate) {
        alert(`Вы пожертвовали ${amountToDonate} р ${selectedType === 'monthly' ? 'ежемесячно' : 'единоразово'}.`);
        // Здесь можно добавить логику отправки данных на сервер или другую обработку
        resetForm(); // Сбрасываем форму после пожертвования
    } else {
        alert('Пожалуйста, выберите сумму или введите свою.');
    }
}

function resetForm() {
   selectedType = '';
   selectedAmount = null;

   const buttons = document.querySelectorAll('.amount');
   buttons.forEach(button => button.classList.remove('selected'));
   
   document.getElementById('one-time').classList.remove('selected');
   document.getElementById('monthly').classList.remove('selected');
   document.getElementById('custom-amount').value = '';
}


