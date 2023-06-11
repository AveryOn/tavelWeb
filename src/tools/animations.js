// Функция анимации появления текста
function animateText(text, callback){
    let arrayWords = text.split('');
    let resultText = '';
    let count = 0;
        for(let word of arrayWords){
            count++
            setTimeout(() => {
                resultText += word;
                callback(resultText);
            }, count * 60);
        }
    setTimeout(() => {
        arrayWords = resultText.split('');
        for(let word of arrayWords){
            count++
            setTimeout(() => {
                arrayWords.pop()
                callback(arrayWords.join(''));
            }, count * 40);
        }
    }, count * 100);
}

export default animateText;