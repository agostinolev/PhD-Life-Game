import * as init from './init';
import {state} from '../index';

export const bankrupt = () => {
    // alertify.alert('Bankrupt.','Noo! You bankrupted! You lose the game!').setting({label: 'OK','onok':function (){

    //     alertify.alert('Thank you','Thank you for playing this game! I hope you had fun!', function() {
    //         if (music.musicOn) elements.audioBtn.play();
    //         alertify.alert().set('onclosing', function(){return true});
    //         init.setInit();
    //     }).setting({label:'NEW GAME','closable':false,'onclosing': function(){return false}});
    // }});
    alertify.alert('Bankrupt.','Noo! You bankrupted! You lose the game!<br><br>Thank you for playing this game! I hope you had fun!', function(){init.setInit();}).set('label','NEW GAME').show();
};

export const endTime = () => {
    if (state.properties['Research'] < 6 && state.properties['SocialLife'] < 6) {
        alertify.alert('You lose.','Noo! You did not reach the minimum requirement to win! You lose the game!<br><br>Thank you for playing this game! I hope you had fun!', function(){init.setInit();}).set('label','NEW GAME').show();
    } else {
        alertify.alert('You won.','Compliment!!! You won the game!!!<br><br>Thank you for playing this game! I hope you had fun!', function(){init.setInit();}).set('label','NEW GAME').show();
    }
};