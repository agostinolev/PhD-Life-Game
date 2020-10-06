import {state} from '../index';
import {elements} from './base';

export const viewSetProp = () => {
    const currentProp = state.properties;
    const UIproperties = elements.properties;
    for (const property in state.properties) {
        // if the state is smaller than 0.5, do not show number in the bar
        if(currentProp[property] > 0.5) UIproperties[property].textContent = `${Math.floor(currentProp[property])}/10`;
        else UIproperties[property].textContent = '';
        //advance the bar color
        UIproperties[property].style.width = `${currentProp[property] * 10}%`;
    }
};