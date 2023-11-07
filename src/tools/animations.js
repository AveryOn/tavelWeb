// Функция анимации появления текста
function animateText(text, callback, onlyUp = false, delay = 60) {
    let arrayWords = text.split('');
    let resultText = '';
    let count = 0;
    for (let word of arrayWords) {
        count++
        setTimeout(() => {
            resultText += word;
            callback(resultText);
            if (resultText.length === text.length) {
                callback(resultText, true);
            }
        }, count * delay);
    }
    if (!onlyUp) {
        setTimeout(() => {
            arrayWords = resultText.split('');
            for (let word of arrayWords) {
                count++
                setTimeout(() => {
                    arrayWords.pop()
                    callback(arrayWords.join(''));
                }, count * 40);
            }
        }, count * 100);
    }
    else return;
}

export default animateText;