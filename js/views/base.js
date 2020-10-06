export const elements = {
    timeTableBtns: document.querySelectorAll('tbody td button'),
    budgetUI: document.querySelector("#budget"),
    salaryUI: document.querySelector("#salary"),
    properties: {
        'Research': document.querySelector(".research"),
        'SocialLife': document.querySelector(".socialLife"),
        'Alcoholism': document.querySelector(".alcoholism"),
        'Energy': document.querySelector(".energy"),
        'Happiness': document.querySelector(".happyness"),
    },
    toggles: document.querySelectorAll("[class*='toggle']"),
    timeSchedule: {
        'totHours': document.querySelector("#total-number"),
        'totLeftHours': document.querySelector("#rest-number"),
        'commuteHours': document.querySelector("#commute-number"),
        'workHours': document.querySelector("#work-number"),
        'extraWorkHours': document.querySelector("#extraWork-number"),
        'sleepHours': document.querySelector("#sleep-number"),
        'workOutHours': document.querySelector("#workOut-number"),
        'hobbyHours': document.querySelector("#hobby-number"),
        'pizzaHours': document.querySelector("#pizza-number"),
        'drinkHours': document.querySelector("#drink-number"),
        'partyHours': document.querySelector("#party-number"),
    },
    newWeek: document.querySelector("#newWeek"),
    currentWeek: document.querySelector("#week"),
    currentMonth: document.querySelector("#month"),
    currentYear: document.querySelector("#year"),
    reset: document.querySelector("#newGame"),
    apartments: document.querySelectorAll('.apartments'),
    pets: document.querySelectorAll('.pets'),
    saveGame: document.querySelector("#saveGame"),
    musicBtn: document.querySelector("#music"),
    audio: document.querySelector("audio"),
    musicIcon: document.querySelector("#music-icon"),
    audioBtns: document.querySelectorAll("[id*='sound-btn-']"),
    audioBtnPlus: document.querySelector("#sound-btn-plus"),
    audioBtnMinus: document.querySelector("#sound-btn-minus"),
    audioBtnCat: document.querySelector("#sound-btn-cat"),
    audioBtnDog: document.querySelector("#sound-btn-dog"),
};

export const pets = {
    'none': {
        name: 'none',
        cost: 0,
        happiness: 0.0,
        energy: 0.0,
        alcoholism: 0.0
    },
    'dog': {
        name: 'dog',
        cost: 150,
        happiness: 1.0,
        energy: 1.0,
        alcoholism: 0.0
    },
    'cat': {
        name: 'cat',
        cost: 100,
        happiness: 0.5,
        energy: 0.3,
        alcoholism: 0.0
    },
    'doubleCat': {
        name: 'doubleCat',
        cost: 150,
        happiness: 1.0,
        energy: 0.3,
        alcoholism: 0.2
    }
};

export const apartments = {
    'small': {
        rent: 1000,
        size: 'small',
        commute: 3,
        happiness: 0.0
    },
    'medium': {
        rent: 1500,
        size: 'medium',
        commute: 2,
        happiness: 0.01
    },
    'big': {
        rent: 2000,
        size: 'big',
        commute: 1,
        happiness: 0.05
    }
};