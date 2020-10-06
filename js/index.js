import {elements, pets, apartments } from './views/base';
import * as timeScheduleUI from './views/viewTimeSchedule';
import * as timeScheduleModule from './models/timeSchedule';
import * as viewPetsAndApartments from './views/viewPetsAndApartments';
import * as init from './models/init';
import * as music from './models/music';
import * as randomEvents from './models/randomEvents';
import * as messages from './views/messages';
import * as checkWin from './models/checkWin';
import * as budget from './models/budget';
import * as advWeek from './models/advWeek';

export var state = {};
var storage;

window.addEventListener("load", ev => {
    music.backgroundMusic();
    storage = JSON.parse(localStorage.getItem('savedGame'));
    if(storage) {
        state = storage;
        messages.loadGameMex();
    } else {
        messages.newGameMex();
    }
});

// user can change the week time schedule
for (const button of elements.timeTableBtns){
    button.addEventListener('click', event =>{
        const [type,sign] = button.id.split("-");
        // upgrade the time schedule and the total time
        timeScheduleModule.upgWeek(type,sign);
        timeScheduleUI.upgWeek();
    });
};

// Calculate the new properties when Next Week button has been clicked
newWeek.addEventListener('click', event => {
    //check if all the total hours is 168
    if(parseInt(state.weekTimes.totHours) === 168) {  
        if (music.musicOn) elements.audioBtnPlus.play();
        // advance week
        advWeek.advanceWeek();
        
        // update the budget
        budget.updBudget();

        // check if the game ended
        if(state.budget.bank < 0.0) {
            checkWin.bankrupt();
        } else if (state.time.year === 2) {
            checkWin.endTime();
        } else {
            randomEvents.handleRandomEvents();
        }
    } 
});

elements.reset.addEventListener('click', event => {
    if (music.musicOn) elements.audioBtnPlus.play();
    // new game!
    init.setInit();

});

// user can change the apartments
for (const button of elements.apartments){
    button.addEventListener('click', event => {
        const id = button.id;
        // update the apartment
        state.house = apartments[id];
        //upgrade UI apartment
        viewPetsAndApartments.viewUpdApartment(id);
    });
};

// user can have pet
for (const button of elements.pets){
    button.addEventListener('click', event => {
        const id = button.id;
        // update the pet if it is possible
        if (!document.querySelector(`#${id}`).classList.contains("disabled")){
            state.pet = pets[id];
            //upgrade UI pet
            viewPetsAndApartments.updPets(id);
        }
    });
};

saveGame.addEventListener('click', el => {
    if (music.musicOn) elements.audioBtnPlus.play();
    localStorage.setItem('savedGame', JSON.stringify(state));
});


