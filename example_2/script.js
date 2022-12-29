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


const myBox = document.querySelector('.raiting_box');
const myStars = document.querySelectorAll('.myStar');
const myFirstStar = document.querySelector('.myStar');

myStars.forEach(element => {
    element.addEventListener('click', (e) => {
        if (document.querySelectorAll('.myStarChoose')) {
            const myConst = document.querySelectorAll('.myStarChoose');
            for (let i = myConst.length; i > 0; i--) {
                myConst[i - 1].classList.remove('myStarChoose');
                console.log(myConst);
            }
        }
        for (let i = 0; myStars[i - 1] != element; i++) {
            myStars[i].classList.add('myStarChoose');
        }
        const myConst = document.querySelectorAll('.myStarChoose');

    });
    // element.addEventListener('mouseout', (e) => {
    //     // if (document.querySelectorAll('.myStarChoose')) {
    //     //     const myConst = document.querySelectorAll('.myStarChoose');
    //     //     for (let i = myConst.length; i > 0; i--) {
    //     //         myConst[i - 1].classList.remove('myStarChoose');
    //     //         console.log(myConst);
    //     //     }
    //     // }
    // })
});













