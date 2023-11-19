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


  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#myForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      fetch("form.php", { 
        method: "GET",
        
      })
        .then(response => response.text())
        .then(data  => {
          alert(data);
        })
        .catch(error => {
          console.error(error);
        });
    });
  });