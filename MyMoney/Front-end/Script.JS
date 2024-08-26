const apiUrl = 'http://localhost:8080/api/negative-ballance';

const negativeBallanceListUl = document.getElementById('negative-ballance-list-ul');
const newNegativeBallanceBtn = document.getElementById('new-negative-ballance-btn');
const negativeBallanceForm = document.getElementById('negative-ballance-form');
const saveNegativeBallanceBtn = document.getElementById('save-negative-ballance-btn');

newNegativeBallanceBtn.addEventListener('click', () => {
    negativeBallanceForm.style.display = 'block';
});

saveNegativeBallanceBtn.addEventListener('click', () => {
    const whatYouDoInput = document.getElementById('what-you-do');
    const priceInput = document.getElementById('price');
    const dataInput = document.getElementById('data');

    const negativeBallance = {
        whatYouDo: whatYouDoInput.value,
        price: parseInt(priceInput.value),
        data: dataInput.value
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(negativeBallance)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        negativeBallanceForm.style.display = 'none';
        getNegativeBallances();
    })
    .catch(error => console.error(error));
});

getNegativeBallances();


