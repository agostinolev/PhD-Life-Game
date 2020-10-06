import * as viewPetsAndApartments from '../views/viewPetsAndApartments';
import * as viewProp from '../views/viewProp';
import * as viewWeek from '../views/week';
import * as init from './init';
import * as messages from '../views/messages';
import * as viewBudget from '../views/viewBudget';
import {state} from '../index';


export const loadGame = () => {
    init.weekHours();
    viewWeek.viewSetWeek();
    viewProp.viewSetProp();
    viewBudget.viewUpdBudget();
    viewPetsAndApartments.updPets(state.pet.name);
    viewPetsAndApartments.viewUpdApartment(state.house.size);
};

export const newGame = () => {
    // initial setup
    localStorage.clear();
    init.setInit();
    messages.start();
    // localStorage.setItem('savedGame', JSON.stringify(state));
};

