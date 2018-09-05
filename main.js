let isResponse = ()=>{
   $.ajax({
      type: 'POST',
      url: 'http://108.61.210.25:8030/translate_text',
      data: ({key: '11111111111111111a111111111111111111111', text: $('.inputText').val(), lf: "en", lt: "ru"}),
      success:(data)=>{
          let result =  JSON.parse(data);
          $('span').html(result.translated_text);
      },
      error:(xhr)=>{
          console.log(xhr.status);
          alert('Error ' + xhr.status + ', try again')
      }
  })
};

$('.translateButton').click(isResponse);


