import {state} from '../index';
import { pizzaPrice, drinkPrice, partyPrice, foodPrice} from './prices';
import {maxHours, minHours, standardTime} from './time';

export const updBudget = () => {
    const totalBudget = state.budget;
    const weekTimes = state.weekTimes;
    weekTimes['drinkHours'] /= standardTime['drink'];
    weekTimes['pizzaHours'] /= standardTime['pizza'];
    weekTimes['partyHours'] /= standardTime['party'];
    // reduce for food and how many times the user went out
    totalBudget.bank -= (foodPrice + weekTimes['pizzaHours'] * pizzaPrice + weekTimes['drinkHours'] * drinkPrice + weekTimes['partyHours'] * partyPrice );
    if(state.time.week === 1) {
        // reduce the rent of the apartment
        totalBudget.bank += state.budget.salary - state.house.rent - state.pet.cost;
    }
};