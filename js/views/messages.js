import "../../AlertifyJS-master/css/alertify.min.css";
import "../../AlertifyJS-master/css/themes/custom.css";
import {state} from '../index';
import {elements, pets,apartments} from '../views/base';
import { pizzaPrice, drinkPrice, partyPrice, foodPrice} from '../models/prices';
import {maxHours, standardTime} from '../models/time';
import * as music from '../models/music';
import * as loadSave from '../models/loadGame';


export const start = () => {
    const message = 'To win the game, reach at the ending time a Research value of 6/10 and Social Life of 6/10 at least.<br><br>The game will finish at the 2nd year.<br><br>Toggle on each object to have more info!';
    alertify.confirm('How to win', message, function(){music.musicActive()}, music.musicDisactive).set({labels:{ok:'Play with sounds',cancel:'Play mute'},'closable':false});
};

export const monthMexReport = () => {
    const report = `Month report<br><br>Income:<br> Salary: <span class='green'>${state.budget.salary} zl</span><br><br>Outcome:<br>Rent: <span class='red'>${state.house.rent} zl</span><br>${state.pet.name !== 'none' ? `${state.pet.name}:  <span class='red'>${state.pet.cost} zl</span>` :''}`;
    alertify.notify(report, 'success', 10);
};

export const loadGameMex = () => {
    alertify.confirm('Old game saved', 'A old save game is found. What to do?', loadSave.loadGame, loadSave.newGame).set({labels:{ok:'LOAD GAME',cancel:'NEW GAME'},'closable':false});
};

export const newGameMex = () => {
    alertify.alert('Welcome!','Welcome to the PhD life simulator game - beta version!').setting({label:'NEW GAME','closable':false,'onok':function(){loadSave.newGame()}});
};

export const weekMexReport = () => {
    let str, deltapr;
    let weekReport = `Increments:<br>`;
    for (const property in state.properties) {
        deltapr = state.increments[`delta${property}`];
        if (deltapr > 0) str = `<span  margin-left:190px>${property}</span>: <span class='green'>${deltapr.toFixed(1)}</span><br>`
        else if (`${deltapr}` < 0) str = `${property}: <span class='red'>${deltapr.toFixed(1)}</span><br>`
        else str = `${property}: <span>${deltapr.toFixed(1)}</span><br>`
        weekReport = weekReport.concat(str);
    }

    weekReport = weekReport.concat(`<br>Expenses:<br>Weekly food:  <span class='red'>${foodPrice} zl</span><br>`);
    if (state.weekTimes['pizzaHours'] > 0) weekReport = weekReport.concat(`Pizza evenings:  <span class='red'>${state.weekTimes['pizzaHours'] * pizzaPrice} zl</span><br>`);
    else  weekReport = weekReport.concat(`Pizza evenings: ${state.weekTimes['pizzaHours'] * pizzaPrice} zl<br>`);
    if (state.weekTimes['drinkHours'] > 0) weekReport = weekReport.concat(`Drinking evenings:  <span class='red'>${state.weekTimes['drinkHours'] * drinkPrice} zl</span><br>`);
    else  weekReport = weekReport.concat(`Drinking evenings: ${state.weekTimes['drinkHours'] * drinkPrice} zl<br>`);
    if (state.weekTimes['partyHours'] > 0) weekReport = weekReport.concat(`Party evenings:  <span class='red'>${ state.weekTimes['partyHours'] * partyPrice} zl</span><br>`);
    else  weekReport = weekReport.concat(`Party evenings: ${ state.weekTimes['partyHours'] * partyPrice} zl<br>`);

    alertify.alert('Week report',weekReport, function() {if (music.musicOn) elements.audioBtnPlus.play(); alertify.alert().set('onclosing', function(){return true})}).setting({label:'OK','closable':false,'onclosing': function(){return false}});
};

const tooglesStrings = {
    'work': `Working is important for your research. But remember that it consumes your energy and happiness! ${standardTime['work']}h per day, with a maximum of 7 days per week. Do not forget the time you need to commute (see your apartment)!`,
    'extraWork': 'Did not you finish your work? Don\'t panic! You can always have more hours at work!',
    'sleep': `If you want to be energyiser and do not get mad, get some rest!`,
    'workOut': 'Mens sana in corpore sano: do some sport to increase your happiness, at the expense of energy.',
    'hobby': 'Having an hobby would help you to do not get crazy and think only about work...You will see that your happiness will increase, but you will be more tired',
    'pizza': `A pizza with friends! Such a beautiful idea! It will take you ${standardTime['pizza']}h and ${pizzaPrice} zl.`,
    'drink': `Let\'s get a drink! Only one...maybe! No, maybe two. Ok, let\'s get drunk! This choice take you ${standardTime['drink']}h and ${drinkPrice} zl.`,
    'party': `The need of dance is impelling. You need to move your body to the sound of music! This wonderful night take you ${standardTime['party']}h and ${drinkPrice} zl.`,
    'small': `Small apartment located in the outskirt of the city. You will spend ${apartments['small'].rent} zl per month, and ${apartments['small'].commute}h to reach work.`,
    'medium': `Normal size apartment located in a better position of the city. You will spend ${apartments['medium'].rent} zl per month, and ${apartments['medium'].commute}h to reach work. It slighlty increases your happiness.`,
    'big': `Big apartment located really close to your work! You will spend ${apartments['big'].rent} zl per month, and ${apartments['big'].commute}h to reach work. Bigger place to live, happier it will make you! It relatively increases your happiness.`,
    'dog': `Such an adorable dog! I want it. It is so cute!!! \nSuch cuteness will cost you ${pets['dog'].cost} zl per month, but it will give you cutiness in happiness, but will consume your energy`,
    'cat': `Being your supervisor slave is not enough? You are so masochist...\nYou will tribute to your new God ${pets['cat'].cost} zl per month. You may be a slight more happy, and less tired.`,
    'doubleCat': `So you choiced polytheism. You want more puurrness...\nYour God will requesta tribute of ${pets['cat'].cost} zl per month. It will make you happier, but less tired. It will increase also your alcoholism.`
};

export const setToogle = () => {
    // user can change the week time schedule
    for (const toggle of elements.toggles){
        toggle.title = tooglesStrings[toggle.id];
    };
};