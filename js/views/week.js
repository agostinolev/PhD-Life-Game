import {state} from '../index';
import {elements} from './base';
import * as time from '../models/time';

export const viewSetWeek = () =>  {
    //update the time in the UI
    let currentTime = state.time;
    elements.currentWeek.textContent = currentTime.week;
    elements.currentMonth.textContent = time.months[currentTime.month];
    elements.currentYear.textContent = time.years[currentTime.year];
};