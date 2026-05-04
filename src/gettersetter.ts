//? getter
//? setter

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  //! setter example
  set addBalance(amount: number) {
    this.userBalance = this.userBalance + amount;
  }

  //! getter example
  get getBalance() {
    return this.userBalance;
  }
}

const userAccount1 = new BankAccount(111, "Suzan", 10);

userAccount1.addBalance = 100;
console.log(userAccount1);
