
$(document).ready(function() {
    // Обработчик события отправки формы
    $("#myForm").submit(function(event) {
      event.preventDefault(); // Отменить отправку формы

      // Получить данные формы
      const formData = $(this).serializeArray();

      // Преобразование данных в JSON-структуру
      const jsonData = {};
      $.each(formData, function(index, field) {
        jsonData[field.name] = field.value;
      });

      // Вывод JSON-структуры на экран
      $("#jsonOutput").text(JSON.stringify(jsonData));

      $.ajax({
        url: "form.json",
        type: "GET",
        data: jsonData,
        success: function(response) {
          alert(response.answer); 
        },
        error: function(error) {
          console.error(error);
        }
      });
  });
});




// async function getResponse() {
//   let response = await fetch('form.json')
//   let content = await response.json()
  

//   let key;

//     console.log(content.answer)
  



// }


// getResponse()


