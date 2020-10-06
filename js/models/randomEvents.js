import { state } from "..";
import * as advWeek from './advWeek';
import {maxHours, minHours, standardTime} from './time';

const randomEvents = {
    wonGrant: 0,
    inRush: 0,
}

let endTimeGrant = {
    month: 0,
    year: 0
};
let endTimeDeadLine;

export const handleRandomEvents = () => {
    let trigger = 0;
    if (state.properties['Research'] >= 6.0) trigger = foundMistakeInCode();
    
    if(randomEvents.wonGrant === 0 && trigger === 0) trigger = winGrant();
    else if (randomEvents.wonGrant !== 0 && trigger === 0) trigger = endGrant();
    
    if(randomEvents.inRush === 0 && trigger === 0) trigger = deadLine();
    else if (randomEvents.inRush !== 0 && trigger === 0) trigger = endDeadLine();

    if (trigger === 0) advWeek.newWeek();
};

const foundMistakeInCode = () => {
    const randomNum = Math.random();
    if (randomNum < 0.3) {
        alertify.alert('Error with results!','Shit happened! You made a big mistake in your research!<br>It seems you have to reconsider few things!').setting({label:'New week','closable':false,'onok':function(){advWeek.newWeek(1);}});
        return 1;
    }
    return 0;
}

const winGrant = () => {
    const randomNum = Math.random();
    if (randomNum < 0.1 * state.properties['Research']) {
        endTimeGrant.month = state.time.month,
        endTimeGrant.year = state.time.year + 1,
        state.budget.salary += 1000;
        randomEvents.wonGrant = 1;
        alertify.alert('You won a grant!','Splendid! Because of you amazing work research, you won a grant lasting 1 year.<br><br> It will increase your salary of 1000 zl!!<br>').setting({label:'New week','closable':false,'onok':function(){advWeek.newWeek();}});
        return 1;
    }
    return 0;   
}

const endGrant = () => {
    if (state.time.week === 4 && state.time.month === endTimeGrant.month && state.time.year === endTimeGrant.year){
        state.budget.salary -= 1000;
        alertify.alert('Your grant expired!','Your grant has expired. You come back to your previous salary!!<br>').setting({label:'New week','closable':false,'onok':function(){advWeek.newWeek();}});
        randomEvents.wonGrant = 0;
        return 1;
    }
    return 0;   
}


const deadLine = () => {
    const randomNum = Math.random();
    if (randomNum < 0.3) {
        endTimeDeadLine = determineEndDeadLine();
        randomEvents.inRush = 1;
        minHours['extraWork'] = 15;
        maxHours['extraWork'] = 168;
        maxHours['party'] = 0;
        maxHours['pizza'] = 3;
        maxHours['drink'] = 2;
        alertify.alert('Approx to a dead line!','Time is passing by too fast, and you have a deadline.<br><br> You did nothing so far! You have to work hard for the next two week to catch up with the work!<br>').setting({label:'New week','closable':false,'onok':function(){advWeek.newWeek();}});
        return 1;
    }
    return 0;
}

const determineEndDeadLine = () => {
    let week = state.time.week + 2;
    let month = state.time.month;
    let year = state.time.year;
    if(week > 4 ) {
        week -= 4;
        month += 1;
    }
    if (month >= 12) {
        month = 0;
        year += 1;
    }
    return {
        week: week,
        month: month,
        year: year
    }
}

const endDeadLine = () => {
    if (state.time.week === endTimeDeadLine.week && state.time.month === endTimeDeadLine.month && state.time.year === endTimeDeadLine.year){
        randomEvents.inRush = 0;
        minHours['extraWork'] = 0;
        maxHours['extraWork'] = 21;
        maxHours['party'] = 7;
        maxHours['pizza'] = 7;
        maxHours['drink'] = 7;
        alertify.alert('Dead line!','You reached the dead line!<br><br> You work so hard, but still no one know if it was worth it...<br>').setting({label:'New week','closable':false,'onok':function(){advWeek.newWeek();}});
        return 1;
    }
    return 0;
}
