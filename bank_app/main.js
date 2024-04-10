// BankAccount class
class BankAccount {
  accountNumber;
  ownerName;
  balance;

  deposit(amount) {
      this.balance += amount;
      console.log(`Deposited TK${amount} into account ${this.accountNumber}. New balance: TK${this.balance}`);
  }

  withdraw(amount) {
      if (amount > this.balance) {
          console.log("Insufficient funds to withdraw");
      } else {
          this.balance -= amount;
          console.log(`Withdrawn TK${amount}. New balance: TK${this.balance}`);
      }
  }

  getBalance() {
      return this.balance;
  }

  displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: TK${this.balance}`);
  }
}

//  instances 
const account1 = new BankAccount();
account1.accountNumber = 1001;
account1.ownerName = "Sabbir";
account1.balance = 2000;

const account2 = new BankAccount();
account2.accountNumber = 1002;
account2.ownerName = "Ahmed";
account2.balance = 200;

// Show functionality
console.log("Account 1:");
account1.displayAccountInfo();
account1.deposit(200);
account1.withdraw(300);
account1.withdraw(1000); 

console.log("\nAccount 2:");
account2.displayAccountInfo();
account2.withdraw(600); 
