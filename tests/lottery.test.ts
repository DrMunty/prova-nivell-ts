import { describe, test, expect } from 'vitest';
import { lotteryResponseLogic } from '../src/scripts/lottery';

describe('lotteryResponseLogic', () => {
    test('should return the succes message if user gets the number right', () => {
        const userInput = 7
        const randomNum = 7
       if (userInput === randomNum)
        expect(responseElement).toBe(succesMessage);
    });
});