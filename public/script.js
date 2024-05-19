function showForm() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('table-container').style.display = 'none';
  }
  
  function showTable() {
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('table-container').style.display = 'block';
  }
  
  document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var direccion = document.getElementById('direccion').value;
    var numero  = document.getElementById('numero').value;
    var edad = document.getElementById('edad').value;
    addDataToTable(name, email, direccion, numero, edad);
    document.getElementById('data-form').reset();
  });
  
  function addDataToTable(nombre, email, direccion , numero , edad) {
    var table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3)
    var cell5 = newRow.insertCell(4);
    cell1.innerHTML = nombre;
    cell2.innerHTML = email;
    cell3.innerHTML = direccion;
    cell4.innerHTML = numero;
    cell5.innerHTML = edad;
  }
  