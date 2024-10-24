const swiper = new Swiper('.swiper', {
    loop: true,
    longSwipesRatio: 2,
    speed: 100,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        enabled: false,
    },
    breakpoints: {
        992: {
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
    }
});



const dog = {
    name: "Bella",
    age: 4,
    color: "black",
    parents: {
        mother: 'Luna',
        father: 'Rocky'
    }
};

const cat = {
    name: "Sky",
    age: 2,
    color: "green",
    parents: {
        mother: {
            name: 'Basya',
            age: 5,
            color: 'gray'
        },
        father: {
            name: 'Rio',
            age: 6,
            color: 'black'
        }
    }
};

const hamster = {
    name: "Nibbles",
    age: 2,
    color: "white",
    parents: {
        mother: 'Daisy',
        father: 'Fluffy'
    }
};

console.log(`Dog's name: ${dog.name}, Age: ${dog.age}, Color: ${dog.color}`);
console.log(`Cat's name: ${cat.name}, Age: ${cat.age}, Color: ${cat.color}`);
console.log(`Mother's name: ${cat.parents.mother.name}, Age: ${cat.parents.mother.age}, Color: ${cat.parents.mother.color}`);
console.log(`Father's name: ${cat.parents.father.name}, Age: ${cat.parents.father.age}, Color: ${cat.parents.father.color}`);
console.log(`Hamster's name: ${hamster.name}, Age: ${hamster.age}, Color: ${hamster.color}`);
