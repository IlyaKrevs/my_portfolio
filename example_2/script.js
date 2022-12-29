const myPassword = document.querySelector('.password_box');
const passRetype = document.querySelector('.reType');
const myForm = document.querySelector('.sign_up');

myForm.addEventListener('input', (e) => {
    if (passRetype.value !== myPassword.value || myPassword.value === "") {
        passRetype.classList.add('password_wrong');
        myPassword.classList.add('password_wrong')
    }
    else {
        passRetype.classList.remove('password_wrong');
        myPassword.classList.remove('password_wrong');
        passRetype.classList.add('password_good');
        myPassword.classList.add('password_good');
    }
});


const myStars = document.querySelectorAll('.myStar');

myStars.forEach(element => {
    element.addEventListener('click', (e) => {
        const myConst = document.querySelectorAll('.myStarChoose');
        for (let i = myConst.length; i > 0; i--) {
            myConst[i - 1].classList.remove('myStarChoose');
        }
        for (let i = 0; myStars[i - 1] != element; i++) {
            myStars[i].classList.add('myStarChoose');
        }
        const myButton = document.querySelector('.sign_up_button');
        myButton.value = document.querySelectorAll('.myStarChoose').length;
    });
});















