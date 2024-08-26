const apiUrl = 'http://localhost:8080/api/negative-ballance';
const tableBody = document.querySelector('#negative-balance-table tbody');

function deleteById(id) {
  // Faz uma solicitação DELETE à API
  fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
    .then(response => {
      if (response.ok) {
        // Remove o item da tabela
        const row = document.querySelector(`#negative-balance-table tr[data-id="${id}"]`);
        row.remove();
      } else {
        console.error('Falha ao excluir o item');
      }
    })
    .catch(error => console.error('Erro:', error));
}

function editById(id) {
  // Busca os dados do item para edição
  fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(data => {
      // Substitua isso pela sua lógica de edição
      const newWhatYouDo = prompt('Editar Descrição:', data.whatYouDo);
      const newPrice = prompt('Editar Valor:', data.price);
      const newData = prompt('Editar Data:', data.data);

      // Faz uma solicitação PUT para atualizar o item
      fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          whatYouDo: newWhatYouDo,
          price: newPrice,
          data: newData
        })
      })
        .then(response => response.json())
        .then(updatedData => {
          // Atualiza o item na tabela
          const row = document.querySelector(`#negative-balance-table tr[data-id="${id}"]`);
          row.innerHTML = `
            <td>${updatedData.whatYouDo}</td>
            <td>${updatedData.price}</td>
            <td>${updatedData.data}</td>
            <td>
              <button onclick="editById(${id})">Editar</button>
              <button onclick="deleteById(${id})">Excluir</button>
            </td>
          `;
        });
    })
    .catch(error => console.error('Erro:', error));
}

// Busca os dados da API e preenche a tabela
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log('Dados recebidos:', data);
    const negativeBalances = data;
    tableBody.innerHTML = '';

    negativeBalances.forEach(negativeBalance => {
      console.log('Negative Balance:', negativeBalance);
      const row = document.createElement('tr');
      row.dataset.id = negativeBalance.id;
      row.innerHTML = `
        <td>${negativeBalance.whatYouDo}</td>
        <td>${negativeBalance.price}</td>
        <td>${negativeBalance.data}</td>
        <td>
          <button onclick="editById(${negativeBalance.id})">Editar</button>
          <button onclick="deleteById(${negativeBalance.id})">Excluir</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Erro:', error));