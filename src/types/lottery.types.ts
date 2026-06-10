export interface LotteryResponse {
	success: boolean;
	result: string;
	randomNumber: number;
}

export interface LotteryHistoryItem {
  userNumber: number;
  randomNumber: number;
  result: string;
}

export const history: LotteryHistoryItem[] = [];

