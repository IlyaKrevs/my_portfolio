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
const myFirstStar = document.querySelector('.myStar');


for (let i = 0; i < myStars.length; i++) {
    myStars[i].addEventListener('mouseover', (e) => {
        const myTarget = e.target
    })
    myStars[i].addEventListener('mouseout', (e) => {
        myStars[i].classList.remove('myStarChoose');
    })
}



