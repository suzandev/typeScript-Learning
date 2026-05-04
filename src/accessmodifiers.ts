class BankAccount {
  public userId: number;
  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
  getBalance(): number {
    return this.userBalance;
  }
}

const userAccount1 = new BankAccount(111, "Suzan", 10);

userAccount1.addBalance(100);
console.log(userAccount1.getBalance());
