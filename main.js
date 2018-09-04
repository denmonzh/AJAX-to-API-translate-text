const sendButton = document.getElementById('send');
const getText = document.getElementById('toTranslate').value;

let formData = new FormData();
formData.append('key', '11111111111111111a111111111111111111111');
formData.append('text', 'apple'); formData.append('lf', 'en'); formData.append('lt', 'ru');
fetch("http://108.61.210.25:8030/translate_text",
    {
        body: formData,
        method: "post"
    }).then(function (response) {
        return response;
});






