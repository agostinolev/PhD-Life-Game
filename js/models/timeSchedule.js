import {state} from '../index';
import {maxHours, minHours, standardTime} from './time';
import * as music from './music';
import {elements} from '../views/base';


export const upgWeek = (type,sign) => {
    // upgrade the value of time table week when clicked
    let value = state.weekTimes[`${type}Hours`];
    const valueTot = state.weekTimes['totHours'];

    let deltavalue;
    if(type ==='work') deltavalue = standardTime[type] + standardTime['commute'];
    else deltavalue = standardTime[type];

    // values cannot be less than 0
    if (sign === 'less' && value > minHours[type]){
        state.weekTimes[`${type}Hours`] -= standardTime[type];
        if(type ==='work') state.weekTimes["commuteHours"] -= standardTime['commute'];
        if (music.musicOn) elements.audioBtnMinus.play();
    } else if(sign === 'more' && valueTot < 168 && valueTot+deltavalue <= 168 && Math.floor(value/standardTime[type]) < maxHours[type]) {
        // taking care if the total number of hours is not greater than 168
        state.weekTimes[`${type}Hours`] += standardTime[type];
        if(type ==='work') state.weekTimes["commuteHours"] += standardTime['commute'];
        //adding sound 
        if (music.musicOn) elements.audioBtnPlus.play();
    };

    state.weekTimes.calcTotHours();
};