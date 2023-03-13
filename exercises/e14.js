// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
	let balanceIsWrong = [];
	for (let i = 0; i < array.length; i++) {
		let theDeposits = array[i].deposits || 0;
		let sumOfDeposits = 0;
		for (let x = 0; x < theDeposits.length; x++) {
			sumOfDeposits += theDeposits[x];
		}
		let theWithdrawals = array[i].withdrawals || 0;
		let sumOfWithdrawals = 0;
		for (let x = 0; x < theWithdrawals.length; x++) {
			sumOfWithdrawals += theWithdrawals[x];
		}
		if (sumOfDeposits - sumOfWithdrawals !== array[i].balance) {
			balanceIsWrong.push(array[i]);
		}
	}
	return balanceIsWrong;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
