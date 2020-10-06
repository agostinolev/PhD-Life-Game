import {state} from '../index';

export const maxHours = {
    'work': 7,
    'extraWork': 21,
    'sleep': 168,
    'workOut': 168,
    'hobby': 168,
    'pizza': 7,
    'drink': 7,
    'party': 7,
};

export const minHours = {
    'work': 0,
    'extraWork': 0,
    'sleep': 0,
    'workOut': 0,
    'hobby': 0,
    'pizza': 0,
    'drink': 0,
    'party': 0,
};

export const standardTime = {
    // minimum hours for increasing or decreasing time table week
    'work': 8,
    'extraWork': 1,
    'sleep': 8,
    'workOut': 1,
    'hobby': 1,
    'pizza': 2,
    'drink': 4,
    'party': 10,
    calcWork: function() {
        this['commute'] = state.house.commute;
    },
};
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const years = ['1st Year', '2nd Year', '3rd Year'];