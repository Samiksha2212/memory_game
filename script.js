let cardsArray = [
    {
        'name': 'CSS',
        'img': 'https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/css-programming-language-icon-symbol-logo-vector-_627.png',
    },
    {
        'name': 'HTML',
        'img': 'https://logowik.com/content/uploads/images/492_html5.jpg',
    },
    {
        'name': 'jQuery',
        'img': 'https://www.logo.wine/a/logo/JQuery/JQuery-Logo.wine.svg',
    },
    {
        'name': 'JS',
        'img': 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png',
    },
    {
        'name': 'Node',
        'img': 'https://i.pinimg.com/originals/79/c5/1d/79c51d0e3a3f60b504da6bcc20ab1afc.jpg',
    },
    {
        'name': 'Python',
        'img': 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png',
    }
];


const parentDiv = document.querySelector('#card-section');

// step 2 to duplicate each card
const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard)

// steps 3
// Note that this method creates a new shuffled array instead of modifying the original one.
const myNumbers = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        // console.log(i, j)
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

const shuffledChild = myNumbers(gameCard)



let clickCount = 0;
let firstCard = "";
let secondCard = "";


// styling the match card
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match')
    })
}


// step 7

const resetGame = () => {
    firstCard = "";
    secondCard = "";
    clickCount = 0;

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected')
    })

}

// step 4
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;

    if(curCard.id === "card-section"){return false }

    clickCount ++;

    if(clickCount < 3){

        if(clickCount === 1){
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }else{
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }

        if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){
                // curCard.classList.add('card_match')
                setTimeout(() => {
                    card_matches()
                    resetGame()
                }, 1000)

            }else{
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }

    }

})


// step 1 to add the card
for(let i=0; i<shuffledChild.length; i++){

    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}


