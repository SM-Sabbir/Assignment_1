// BankAccount class
class BankAccount {
    accountNumber;
    ownerName;
    balance;
  
    //deposit function
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited TK${amount} into account ${this.accountNumber}`);
    }
}

const account1 = new BankAccount();
account1.accountNumber =1001

account1.deposit(300);
