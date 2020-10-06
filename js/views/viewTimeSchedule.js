import {state} from '../index';
import {elements} from './base';

export const upgWeek = () => {
    //upgrade the time schedule to the UI
    const weekTimeUI = elements.timeSchedule;
    for (const property in state.weekTimes) {
        if(property !== 'calcTotHours')  weekTimeUI[property].textContent = state.weekTimes[property];
        if(property === 'commuteHours') weekTimeUI[property].textContent = ` + ${state.weekTimes[property]}`;
    }
    state.weekTimes.totHours < 168 ? newWeek.classList.add('disabled') : newWeek.classList.remove('disabled');
};