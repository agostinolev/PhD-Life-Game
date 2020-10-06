import {state} from '../index';
import * as viewBudget from '../views/viewBudget';
import * as increments from './increments';
import * as viewProp from '../views/viewProp';
import * as viewWeek from '../views/week';
import * as messages from '../views/messages';
import * as init from './init';
import * as timeScheduleUI from '../views/viewTimeSchedule';


export const advanceWeek = () => {
    // advance week of one when New week button has been pressed
    let currentTime = state.time;
    currentTime.week += 1;

    // takin care of new month
    if (currentTime.week === 5) {
        currentTime.week = 1;
        currentTime.month += 1;
    };
    // taking care of new year
    if(currentTime.month === 12){
        currentTime.month = 0;
        currentTime.year += 1;
    };
};

export const newWeek = (errorResearch = 0) => {
    //advance properties
    increments.advProperties(errorResearch);

    //advance week in the UI
    viewWeek.viewSetWeek();
    
    //advance properties in the UI
    viewProp.viewSetProp();
    
    // update the budget in the UI
    viewBudget.viewUpdBudget();
    newWeekReport();
};


export const newWeekReport = () => {
    messages.weekMexReport();
    // if new month, add salary and show message about budget
    if (state.time.week === 1) messages.monthMexReport();

    // reset the week time schedule
    init.weekHours();
    if(state.properties['Energy'] < 0.2) {
        minHours['sleep'] = 15;
        state.weekTimes['sleepHours'] = 15;
    };
    
    timeScheduleUI.upgWeek();
};
