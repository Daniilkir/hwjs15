class User {
    constructor(name, age, hobby, premium) {
      this.name = name;
      this.age = age;
      this.hobby = hobby;
      this.premium = premium;
      this.mood = "happy";
    }
  
    changeHobby(newHobby) {
      this.hobby = newHobby;
    }
  }
  
  const user = new User('Mango', 20, 'html', true);
  
  user.changeHobby('skydiving');
  user.premium = false;
  
  for (const key in user) {
    console.log(key, ":", user[key]);
  }
  
  // =====2=====
  
  class Length {
    constructor(mail, isOnline, score) {
      this.mail = mail;
      this.isOnline = isOnline;
      this.score = score;
    }
  }
  
  const length = new Length('poly@mail.com', true, 500);
  
  function countMet(obj) {
    console.log(Object.keys(obj).length);
  }
  
  countMet(length);
  
  // =====3=====
  
  function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';
  
    for (const employee in employees) {
      const tasksCompleted = employees[employee];
      if (tasksCompleted > maxTasks) {
        maxTasks = tasksCompleted;
        bestEmployee = employee;
      }
    }
  
    console.log("Best employee:", bestEmployee);
  }
  
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  });
  
  // =====4=====
  
  function countTotalSalary(employees) {
    let maxSalary = 0;
  
    const salary = Object.values(employees);
    for (const i of salary) {
      maxSalary += i;
    }
    console.log(maxSalary);
  }
  
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  });
  
  // =====5=====
  
  const products5 = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Capture', price: 1200, quantity: 2 },
  ];
  
  const [obj1, obj2, obj3, obj4] = products5;
  
  function getAllPropValues(arr, prop) {
    for (const i of arr) {
      console.log(i[prop]);
    }
  }
  
  getAllPropValues(products5, "name");
  
  // =====6=====
  
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Capture', price: 1200, quantity: 2 },
  ];
  
  const [prod1, prod2, prod3, prod4] = products;
  
  function calculateTotalPrice(allProducts, productName) {
    let allPrice = 0;
  
    for (const product of allProducts) {
      if (product.name === productName) {
        allPrice += product.price * product.quantity;
      }
    }
    console.log(allPrice);
  }
  
  calculateTotalPrice(products, 'Radar');
  
  // =====7=====
  
  const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  const account = {
    balance: 0,
    transactions: [],
  
    createTransaction(amount, type) {
      const transaction = {
        id: account.transactions.length,
        type,
        amount,
      };
      return transaction;
    },
  
    deposit(amount) {
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(transaction);
      this.balance += amount;
      console.log(`Account deposited ${amount}`);
    },
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log(`Insufficient funds`);
        return;
      }
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
      this.balance -= amount;
      console.log(`Withdrawn ${amount}`);
    },
  
    getBalance() {
      return console.log(`Your balance is ${this.balance}`);
    },
  
    getTransactionDetails(id) {
      return account.transactions[id];
    },
  
    getTransactionTotal(type) {
      let sum = 0;
      for (const transaction of this.transactions) {
        if (transaction.type === type) {
          sum += transaction.amount;
        }
      }
      return sum;
    },
  };
  
  account.deposit(500);
  account.withdraw(100);
  account.deposit(300);
  account.getBalance();
  account.deposit(600);
  account.withdraw(800);
  account.getBalance();
  
  console.log(account.getTransactionDetails(1));
  console.log(account.getTransactionDetails(4));
  
  console.log(account.getTransactionTotal(Transaction.WITHDRAW));
  console.log(account.getTransactionTotal(Transaction.DEPOSIT));
  