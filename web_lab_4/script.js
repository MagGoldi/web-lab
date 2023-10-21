document.getElementById("addForm").addEventListener("submit", function (event) {
    event.preventDefault(); // предотвращает отправку формы и перезагрузку страницы

    var photo = document.getElementById("photo").value;
    var exercise = document.getElementById("exercise").value;
    var description = document.getElementById("description").value;
    var grade = document.getElementById("grade").value;

    // Создаем новую строку таблицы
    var table = document.getElementsByTagName("table")[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    // Устанавливаем значения ячеек новой строки
    cell1.innerHTML = photo;
    cell2.innerHTML = exercise;
    cell3.innerHTML = description;
    cell4.innerHTML = grade;

    // Очищаем поля ввода
    document.getElementById("photo").value = "";
    document.getElementById("exercise").value = "";
    document.getElementById("description").value = "";
    document.getElementById("grade").value = "";
});