import { LotteryResponse } from "../types/lottery.types";
import { Messages } from "../types/messages";

export function lotteryLogic(userInput: number, randomNum: number): LotteryResponse {
    if (userInput < 1 || userInput > 10 || isNaN(userInput)) {
    throw new Error(Messages.errorMessage());
    }
    if (userInput === randomNum) {
        return {
            success: true,
            result: Messages.successMessage(userInput, randomNum),
            randomNumber: randomNum
        }
    } else {
        return {
            success: true,
            result: Messages.tryAgainMessage(userInput, randomNum),
            randomNumber: randomNum
        }
    }
}