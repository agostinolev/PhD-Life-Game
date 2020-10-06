import {state} from '../index';
import {elements, pets,apartments} from '../views/base';
import * as viewProp from '../views/viewProp';
import * as viewWeek from '../views/week';
import * as viewPetsAndApartments from '../views/viewPetsAndApartments';
import * as messages from '../views/messages';
import {maxHours, minHours, standardTime} from './time';
import * as timeScheduleUI from '../views/viewTimeSchedule';
import * as viewBudget from '../views/viewBudget';

export const setInit = () => {
    // set initial parameters for new game
    state.house = apartments['small'];
    viewPetsAndApartments.viewUpdApartment('small');
    state.pet = pets['none'];
    viewPetsAndApartments.updPets('none');
    state.budget = {
        salary: 3000,
        bank: 2000
    };
    messages.setToogle();
    weekHours();
    setInitTime();
    setInitProp();
    timeScheduleUI.upgWeek();
    viewBudget.viewUpdBudget();
};


const setInitTime = () => {
    // set initial time for a new game
    state.time = {
        week: 1,
        month: 0,
        year: 0,
    };
    viewWeek.viewSetWeek();
};

const setInitProp = () => {
    // set initial properties for a new game
    state.properties = {
        'Research': 0,
        'Alcoholism': 0,
        'SocialLife': 0,
        'Energy': 10,
        'Happiness': 5,
    };
    // set initial properties in the UI
    viewProp.viewSetProp();
};

export const weekHours = () => {
    standardTime.calcWork();
    state.weekTimes = {
        'workHours':  5*standardTime['work'],
        'extraWorkHours': minHours['extraWork'],
        'commuteHours': 5 * standardTime['commute'],
        'sleepHours': 7 * standardTime['sleep'],
        'workOutHours': 0,
        'hobbyHours': 0,
        'pizzaHours': 0,
        'drinkHours': 0,
        'partyHours': 0,
        calcTotHours: function() {
            this['totHours'] = this['workHours'] + this['extraWorkHours'] + this['commuteHours'] + this['sleepHours'] + this['workOutHours'] + this['hobbyHours'] + this['pizzaHours'] + this['drinkHours'] + this['partyHours'];
            this['totLeftHours'] = 168 - this['totHours'];
        }
    };
    
    state.weekTimes.calcTotHours();
};