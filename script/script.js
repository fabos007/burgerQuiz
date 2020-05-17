//upload of DOM tree before action taken 
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const btnOpenModel = document.querySelector("#btnOpenModal"),
        modalBlock = document.querySelector("#modalBlock"),
        btnCloseModal = document.querySelector("#closeModal"),
        questionTitle = document.querySelector("#question"),
        formAnswers = document.querySelector("#formAnswers"),
        prevButton = document.querySelector("#prev"),
        nextButton = document.querySelector("#next"),
        sendButton = document.querySelector('#send')

    // array of objects with questions 
    const questions = [{
            question: "Какого цвета бургер?",
            answers: [{
                    title: 'Стандарт',
                    url: './image/burger.png'
                },
                {
                    title: 'Черный',
                    url: './image/burgerBlack.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Из какого мяса котлета?",
            answers: [{
                    title: 'Курица',
                    url: './image/chickenMeat.png'
                },
                {
                    title: 'Говядина',
                    url: './image/beefMeat.png'
                },
                {
                    title: 'Свинина',
                    url: './image/porkMeat.png'
                }
            ],
            type: 'radio'
        },
        {
            question: "Дополнительные ингредиенты?",
            answers: [{
                    title: 'Помидор',
                    url: './image/tomato.png'
                },
                {
                    title: 'Огурец',
                    url: './image/cucumber.png'
                },
                {
                    title: 'Салат',
                    url: './image/salad.png'
                },
                {
                    title: 'Лук',
                    url: './image/onion.png'
                }
            ],
            type: 'checkbox'
        },
        {
            question: "Добавить соус?",
            answers: [{
                    title: 'Чесночный',
                    url: './image/sauce1.png'
                },
                {
                    title: 'Томатный',
                    url: './image/sauce2.png'
                },
                {
                    title: 'Горчичный',
                    url: './image/sauce3.png'
                }
            ],
            type: 'radio'
        }
    ];


    // open modal 
    btnOpenModel.addEventListener("click", () => {
        modalBlock.classList.add("d-block");
        playTest();

    });

    //close modal
    btnCloseModal.addEventListener("click", () => {
        modalBlock.classList.remove("d-block");
    });

    //start of testing
    const playTest = () => {
        //object of answers from user 
        const finalAnswers = [];

        // number of Question 
        let numberQuestion = 0;

        // render of our answers based on questions Arr 
        const renderAnswers = (index) => {
            questions[index].answers.forEach((answer) => {
                const answerItem = document.createElement('div');

                answerItem.classList.add('answers-item', 'd-flex', 'flex-column');

                answerItem.innerHTML = `                    
                    <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none" value = "${answer.title}">
                    <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                    <img class="answerImg" src=${answer.url} alt="burger">
                    <span>${answer.title}</span>
                    </label>
                `;
                formAnswers.appendChild(answerItem);
            })
        };

        // create questions on the page among with answers 
        const renderQuestions = (indexQuestion) => {
            //remove items from form 
            formAnswers.innerHTML = ``;

            //verify that our questions will render correctly 
            if (numberQuestion >= 0 && numberQuestion <= questions.length - 1) {
                questionTitle.textContent = `${questions[indexQuestion].question}`;
                renderAnswers(indexQuestion);
                nextButton.classList.remove('d-none');
                prevButton.classList.remove('d-none');
                sendButton.classList.add('d-none')

            };

            if (numberQuestion === 0) {
                prevButton.classList.add('d-none');

            };
            if (numberQuestion === questions.length) {
                prevButton.classList.add('d-none');
                nextButton.classList.add('d-none');
                sendButton.classList.remove('d-none');
                formAnswers.innerHTML = `
                <div class = "form-group">
                    <label for="numberPhone">Enter your number</label>
                    <input type="phone" class="form-control" id="numberPhone">
                </div>
                `
            };

        }

        //start render questions 
        renderQuestions(numberQuestion);

        const checkAnswer = () => {
            const obj = {};
            const inputs = [...formAnswers.elements].filter((input) => input.checked);

            inputs.forEach((input, index) => {
                obj[`${index}_${questions[numberQuestion].question}`] = input.value;
            });
            finalAnswers.push(obj);

        }

        //Next button
        nextButton.onclick = () => {
            checkAnswer();
            numberQuestion++;
            renderQuestions(numberQuestion++);

        }
        //Prev button
        prevButton.onclick = () => {
            numberQuestion--;
            renderQuestions(numberQuestion);
        }


    };
});