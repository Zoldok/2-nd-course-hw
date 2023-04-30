function fructShow () {
    const fruct = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    alert(fruct.sort(() => Math.random() - 0.5));
    let answerOne = prompt('Чему равнялся первый элемент массива?');
    let answerTwo = prompt('Чему равнялся последний элемент массива?') ;
    if (answerOne == fruct[0] && answerTwo == fruct[fruct.length - 1]){
        return alert('Поздравляю, Вы угадали!');
    } else if (answerOne === fruct[0] || answerTwo === fruct[fruct.length - 1]){
        return alert ('Вы были близки к победе!');
    } else {
        return alert('Неправильно');
    }
    }
