const myItem = document.querySelectorAll('.content__item');
console.log(myItem);


myItem.forEach(element => {
    var myCount = 0;
    element.addEventListener('click', (e) => {
        const myImg = element.querySelector('.item__background');
        const mySelect = element.querySelector('.item__background_select');
        const myOval = element.querySelector('.item__description_mid');

        if (myCount === 0) {
            myImg.style.display = 'none';
            mySelect.style.display = 'flex';
            myOval.style.background = '#D91667'
            myCount = myCount + 1;
        }
        else if (myCount === 1) {
            myImg.style.display = 'flex';
            mySelect.style.display = 'none';
            myOval.style.background = '#2EA8E6'
            myCount = 0;
        }
    })
});


for (let index = 0; index < myItem.length; index++) {
    const element = myItem[index];
    element.addEventListener('click', (e) => {
        const myText = element.querySelector('.description_bot__text');
        if (index === 0) {
            myText.textContent = 'Печень утки разварная с артишоками.';
        }
        else if (index === 1) {
            myText.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
        }
        else {
            myText.textContent = 'Филе из цыплят с трюфелями в бульоне.';
        }
    })
};