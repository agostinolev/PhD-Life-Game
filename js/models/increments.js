import { state } from '../index';

export const advProperties = (errorRes = 0) => {    
    state.increments = calcIncrement(state.weekTimes,state.properties, errorRes);
    addIncrement(state.increments);
};

const calcIncrement = (hours,properties, error = 0) => {
    let deltaResearch, deltaAlcoholism,deltaEnergy,deltaHappiness,deltaSocialLife;

    deltaResearch = hours['workHours'] + hours['extraWorkHours'] > 45 ? hours['workHours'] * (properties['Happiness'] / 10.0) * 0.01  + hours['extraWorkHours'] * 0.05: 0;
    deltaAlcoholism = -0.5 + hours['drinkHours'] * 0.1 + hours['partyHours'] * 0.7 + state.pet.alcoholism;
    deltaSocialLife = hours['pizzaHours']* 0.1 + hours['drinkHours'] * 0.2 + hours['partyHours'] * 0.5 - hours['workHours'] * 0.01;
    deltaHappiness = hours['hobbyHours'] * 0.1 + hours['workOutHours'] * 0.05 + hours['pizzaHours'] * 0.1 + hours['drinkHours'] * 0.1 + hours['partyHours'] * 0.5 - hours['workHours'] * 0.03 - hours['extraWorkHours'] * 0.05 + state.pet.happiness + 0.01 * hours['sleepHours'] + state.house.happiness;
    deltaEnergy = 5.0 + (hours['sleepHours'] - 56.0) / 56.0 * 7 - hours['workOutHours']*0.5 - hours['workHours'] * 0.1 - hours['hobbyHours'] * 0.05 - hours['pizzaHours'] * 0.1 - hours['drinkHours'] * 0.1 - hours['partyHours'] * 1.0 - hours['extraWorkHours'] * 0.1 - state.pet.energy;
    if(error > 0) deltaResearch = -2.0;
    return {
        'deltaResearch': deltaResearch,
        'deltaSocialLife': deltaSocialLife,
        'deltaAlcoholism': deltaAlcoholism,
        'deltaEnergy': deltaEnergy,
        'deltaHappiness': deltaHappiness
    };
};

const addIncrement = (incr) => {
    for (const property in state.properties) {
        state.properties[property] += incr[`delta${property}`];
        // max state of 10 and min state of 0, if more or less, set to those values
        if (state.properties[property] > 10) state.properties[property] = 10;
        if (state.properties[property] < 0) state.properties[property] = 0;
    };
};