const myProductItem = document.querySelectorAll('.product__item')
const cart_item = document.querySelector('.cart_item');


myProductItem.forEach(element => {
    element.addEventListener('click', (e) => {
        if (!document.querySelector('.cart_item_text')) {
            const cart_item_text = document.createElement('p');
            cart_item_text.classList.add('cart_item_text');
            cart_item_text.textContent = 'Cart item';
            cart_item.appendChild(cart_item_text);
        };



        const product__block = document.createElement('div');
        product__block.classList.add('product__block123');

        const myImg = element.querySelector('img');
        const myImgCopy = document.createElement('img');
        myImgCopy.classList.add('myImg123');
        myImgCopy.src = myImg.src;

        const product__description = document.createElement('div');
        product__description.classList.add('product__description123');

        const product__item = document.createElement('div');
        product__item.classList.add('product__item123');


        const product__title = element.querySelector('.cell__title');
        const product__titleCOPY = document.createElement('p');
        product__titleCOPY.classList.add('product__title123');
        product__titleCOPY.textContent = product__title.textContent;

        const productDescription = element.querySelector('.cell__text');
        const productDescriptionCopy = document.createElement('p');
        productDescriptionCopy.textContent = productDescription.textContent;

        const productPrice = element.querySelector('.cell__price');
        const productPriceCOPY = document.createElement('p');
        productPriceCOPY.classList.add('product__text123');
        productPriceCOPY.textContent = productPrice.textContent;

        const myExit = document.createElement('img');
        myExit.classList.add('exit');
        myExit.src = 'img/exitpic.svg';

        const product__property123 = document.createElement('div');
        product__property123.classList.add('product__property123');

        product__property123.appendChild(productPriceCOPY);




        product__item.appendChild(product__titleCOPY);
        product__item.appendChild(productDescriptionCopy);
        product__item.appendChild(product__property123);

        product__description.appendChild(product__item);
        product__description.appendChild(myExit);

        product__block.appendChild(myImgCopy);
        product__block.appendChild(product__description);

        cart_item.appendChild(product__block);

        myExit.addEventListener('click', (e) => {
            if (document.querySelector('.product__block123')) {
                product__block.remove();
            }
            if (!document.querySelector('.product__block123')) {
                const myPRICOL = document.querySelector('.cart_item_text');
                myPRICOL.remove();
            }
        })
    })
});
