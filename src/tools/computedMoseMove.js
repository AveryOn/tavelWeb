// Функция отслеживает положение курсора 
// С помощью этой функции создается едва заметное параллакс-движение DOM-элементов 

/*  event - событие mousemove 
    documentWidth - ширина документа
    documentHeight - высота документа
    nameCssX - название CSS-переменной для новой вычисленной X-координаты
    nameCssY - название CSS-переменной для новой вычисленной Y-координаты
*/

export default function computedMouseMove(event, documentWidth, documentHeight, nameCssX, nameCssY){
    const centerMouseX = Math.round(documentWidth / 2);
    const centerMouseY = Math.round(documentHeight / 2);
    let resultX, resultY;
    // правый верхний угол
    if(event.clientX > centerMouseX && event.clientY < centerMouseY){
        // data.mainText.value = `правый верхний угол ${resultX}, ${resultY}`
        resultX = Math.round(event.clientX - centerMouseX);
        resultY = Math.round(event.clientY - centerMouseY);
        document.body.style.cssText += `--${nameCssX}: ${resultX}px`
        document.body.style.cssText += `--${nameCssY}: ${resultY}px`
    }
    // правый нижний угол
    if(event.clientX > centerMouseX && event.clientY > centerMouseY){
        // data.mainText.value = `правый нижний угол ${resultX}, ${resultY}`
        resultX = Math.round(event.clientX - centerMouseX);
        resultY = Math.round(event.clientY - centerMouseY);
        document.body.style.cssText += `--${nameCssX}: ${resultX}px`
        document.body.style.cssText += `--${nameCssY}: ${resultY}px`
    }
    // левый нижний угол
    if(event.clientX < centerMouseX && event.clientY > centerMouseY){
        // data.mainText.value = `левый нижний угол ${resultX}, ${resultY}`
        resultX = Math.round(event.clientX - centerMouseX);
        resultY = Math.round(event.clientY - centerMouseY);
        document.body.style.cssText += `--${nameCssX}: ${resultX}px`
        document.body.style.cssText += `--${nameCssY}: ${resultY}px`
    }
    // левый верхний угол
    if(event.clientX < centerMouseX && event.clientY < centerMouseY){
        // data.mainText.value = `левый верхний угол ${resultX}, ${resultY}`
        resultX = Math.round(event.clientX - centerMouseX);
        resultY = Math.round(event.clientY - centerMouseY);
        document.body.style.cssText += `--${nameCssX}: ${resultX}px`
        document.body.style.cssText += `--${nameCssY}: ${resultY}px`
    }
    // Возвращаемый объект не обязателен, т.к запись необходимых значений происходит сразу в переменные элемента body
    // которые доступны во всем документе
    return {
        resultX,
        resultY
    }
}