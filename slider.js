let currentIndex = 1;
let lastIndex;

const CARD_WIDTH = 270;
const MARGIN_RIGHT = 90;
let pets = [
  {
    name: 'Katrine',
    img: `assets/pets-katrine.png`,
    breed: 'Cat - British Shorthair',
    description: `Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur.
                    Will love you until the last breath she takes as long as you are the one. 
                    She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper 
                    relaxations.`

  },
  {
    name: 'Jennifer',
    breed: 'Dog - Labrador',
    img: `assets/pets-jennifer.png`,
    description: `Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This
                    girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm 
                    in the house if she has all of her favorite toys.`
  },
  {
    name: 'Woody',
    img: `assets/pets-woody.png`,
    breed: 'Dog - Golden Retriever',
    description: `Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he 
                    is on the stronger side, he will learn a lot from your training. Woody will be happier when he 
                    finds a new family that can spend a lot of time with him.`
  },
  {
    name: 'Sophia',
    img: `assets/pets-sophia .png`,
    breed: 'Dog - Shih tzu',
    description: `Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of 
                  energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and 
                  play with toys and I still need some practice.`
  },
  {
    name: 'Timmy',
    img: `assets/pets-timmy.png`,
    breed: 'Cat - British Shorthair',
    description: `Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up
                  to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to 
                  say and wants a person to share his thoughts with.`
  },
  {
    name: 'Charly',
    img: `assets/pets-charly.png`,
    breed: 'Dog - Jack Russell Terrier ',
    description: `This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other 
                   dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play.
                    We think a fenced yard would make him very happy.`
  },
  {
    name: 'Scarlett',
    img: `assets/pets-scarlet.png`,
    breed: 'Dog - Jack Russell Terrier',
    description: `Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and
                  will make a loyal companion and a wonderful family dog or a good companion for a single individual 
                  too since she likes to hang out and be with her human.`
  },
  {
    name: 'Freddie',
    img: `assets/pets-freddie.png`,
    breed: 'Cat - British Shorthair',
    description: `Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings 
                  and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced 
                  around a lot in his life, and is looking to find his forever home.`
  }
]

window.addEventListener('resize', getLastIndex)

document.addEventListener("DOMContentLoaded", function (event) {
  getLastIndex()

  for (let i = 0; i < pets.length; i++) {
   renderPet(pets[i])
  }
});

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
// leftBtn.addEventListener('click', scrollBtnLeft)
rightBtn.addEventListener('click', scrollBtnRight)

function scrollBtnRight() {
  console.log('currentIndex', currentIndex);
  console.log('lastIndex', lastIndex);
  if(currentIndex === lastIndex){
    currentIndex--
    const [firstPet, ...otherPets] = pets
    pets = [...otherPets, firstPet]
    const allPets = document.querySelectorAll('.card')
    document.getElementById('cards').removeChild(allPets[0])
    renderPet(firstPet)
  }

  document.querySelector('.cards').scrollTo({left: currentIndex * (CARD_WIDTH + MARGIN_RIGHT)})
  currentIndex++
}

function getLastIndex() {
  const windowWidth = document.body.clientWidth;
  if (windowWidth > 1024) {
    lastIndex = pets.length - 2;
  } else if (windowWidth <= 1024) {
    lastIndex = pets.length - 1;
  } else if (windowWidth <= 675) {
    lastIndex = pets.length;
  }
}

function renderPet(pet) {
  const cardsDiv = document.getElementById('cards')
  let petDiv = document.createElement('div')
  petDiv.classList.add('card');
  petDiv.innerHTML = `
        <img src="${pet.img}" alt="${pet.name}">
        <p>${pet.name}</p>
        <button class="more-info" onclick="openModal('${pet.name}')">Learn more</button>
    `
  cardsDiv.appendChild(petDiv)
}