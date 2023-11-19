console.log("Hello world!")



$(document).ready(function() {
    // Обработчик события отправки формы
    $("#myForm").submit(function(event) {
      event.preventDefault(); // Отменить отправку формы
      
      // Получить данные формы
      var formData = $(this).serializeArray();
      
      // Преобразование данных в JSON-структуру
      var jsonData = {};
      $.each(formData, function(index, field) {
        jsonData[field.name] = field.value;
      });
      
      // Вывод JSON-структуры на экран
      $("#jsonOutput").text(JSON.stringify(jsonData));
    });
  });

