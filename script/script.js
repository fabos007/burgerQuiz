document.addEventListener('DOMContentLoaded', function () {
    'use strict'

    const btnOpenModel = document.querySelector('#btnOpenModal'),
        modalBlock = document.querySelector('#modalBlock'),
        btnCloseModal = document.querySelector('#closeModal'),
        questionTitle = document.querySelector('#question'),
        formAnswers = document.querySelector('#formAnswers'),
        burgerImg = "./image/burger.png",
        burgerName = "Стандарт";


    btnOpenModel.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTest();
    })


    btnCloseModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block')

    })

    const playTest = () => {
        const renderOptions = () => {
            questionTitle.textContent = 'Какого цвета бургер вы хотите?'
            formAnswers.innerHTML = `
            <div class="answers-item d-flex flex-column">
                <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                <img class="answerImg" src=${burgerImg} alt="burger">
                 <span>${burgerName}</span>
                 </label>
            </div>
           
            `

        }
        renderOptions();
    }


});