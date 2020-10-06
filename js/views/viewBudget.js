import {state} from '../index';
import {elements} from './base';

export const viewUpdBudget = () => {
    elements.budgetUI.textContent = state.budget.bank;
    elements.salaryUI.textContent = state.budget.salary;
};