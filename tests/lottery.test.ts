import { describe, test, expect } from 'vitest';
import { lotteryLogic } from '../src/scripts/lottery';
import { Messages } from '../src/types/messages';

describe('Testing funció checkLotteryResult', () => {
    test(`L'usuari ingressa el número 4 i el sistema genera un número aleatori diferent`, () => {

        const userInput = 4;
        const randomNum = 9;

        const result = lotteryLogic(userInput, randomNum);

        const message = Messages.tryAgainMessage(userInput, randomNum)

        expect(result.result).toBe(message);
    });
});

describe('Testing funció checkLotteryResult', () => {
    test(`L'usuari ingressa el número 7 i el sistema genera el mateix número aleatori`, () => {

        const userInput = 7;
        const randomNum = 7;

        const result = lotteryLogic(userInput, randomNum);

        const message = Messages.successMessage(userInput, randomNum)

        expect(result.result).toBe(message);
    });
});

describe('Testing funció checkLotteryResult', () => {
    test(`L'usuari ingressa un string i la app ha de mostrar un missatge d'error`, () => {

        const userInput = NaN;
        const randomNum = 5;

        expect(() => lotteryLogic(userInput, randomNum)).toThrow(Messages.errorMessage());
    });
});

describe('Testing funció checkLotteryResult', () => {
    test(`L'usuari ingressa el número 20 i la app ha de mostrar un missatge d'error`, () => {

        const userInput = 20;
        const randomNum = 5;

        expect(() => lotteryLogic(userInput, randomNum)).toThrow(Messages.errorMessage());
    });
});

describe('Testing funció checkLotteryResult', () => {
    test(`L'usuari ingressa el número 3 i el número 8 de forma seqüencial, l'historial ha de mostrar el missatge de les dues jugades`, () => {

      const history = [];
      
      const userInput1 = 3;
      const randomNum1 = 5;

      const result1 = lotteryLogic(userInput1, randomNum1);

      history.push(result1);

      const message1 = Messages.tryAgainMessage(userInput1, randomNum1);

      expect(history[0].result).toBe(message1);
      
      const userInput2 = 8;
      const randomNum2 = 8;
      
      const result2 = lotteryLogic(userInput2, randomNum2);

      history.push(result2);
    
      const message2 = Messages.successMessage(userInput2, randomNum2);
      expect(history[1].result).toBe(message2);
          
      expect(history.length).toBe(2);
    });
});