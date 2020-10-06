import {elements} from './base';
import * as music from '../models/music';

export const updPets = (id) => {
    // add sound when clicked
    if (music.musicOn){
        if (id === 'cat' || id === 'doubleCat')  elements.audioBtnCat.play();
        if (id === 'dog')  elements.audioBtnDog.play();
    }

    for (const buttonall of elements.pets) {
        buttonall.classList.add("disabled");
        buttonall.classList.remove("btn-success");
    }
    if(id === 'cat') document.querySelector(`#doubleCat`).classList.remove("disabled");
    if(id !== 'none'){
        document.querySelector(`#${id}`).classList.add("btn-success");
        document.querySelector(`#${id}`).classList.remove("disabled");
    } else {
        document.querySelector(`#cat`).classList.remove("disabled");
        document.querySelector(`#dog`).classList.remove("disabled");
    }
};

export const viewUpdApartment = (id) => {
    if (music.musicOn) elements.audioBtnPlus.play();
    for (const buttonall of elements.apartments) buttonall.classList.remove("btn-success");
    document.querySelector(`#${id}`).classList.add("btn-success");
};