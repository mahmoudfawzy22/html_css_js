'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

//// test 
// userName : js
// password: 1111
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2,
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2025-08-07T23:36:17.929Z',
    '2025-08-05T10:51:36.790Z',
  ],

  currency: 'EGP',
  locale: 'ar-EG',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],

  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const timer = function () {
  let time = 300;

  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timerId);
      containerApp.style.opacity = 0;
      return;
    }

    time--;
  };

  tick();

  const timerId = setInterval(tick, 1000);

  return timerId;
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const combineMovesDates = acc.movements.map((mov, i) => ({
    movement: mov,
    date: acc.movementsDates[i],
  }));

  if (sort) {
    combineMovesDates.sort((a, b) => a.movement - b.movement);
  }

  combineMovesDates.forEach(function (obj, i) {
    const { movement, date } = obj;

    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const options = {
      style: 'currency',
      currency: acc.currency,
    };

    const movementFormatted = new Intl.NumberFormat(
      acc.locale,
      options
    ).format(movement);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__date">
          ${date ? displayDate(date, acc.locale) : ''}
        </div>
        <div class="movements__value">${movementFormatted}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayDate = function (date, locale) {
  const data = new Date(date);

  const daysPassed = Math.floor(
    Math.abs(new Date() - data) / (1000 * 60 * 60 * 24)
  );

  if (daysPassed === 0) return 'TODAY';
  if (daysPassed === 1) return '1 day ago';
  if (daysPassed < 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(data);
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  const options = {
    style: 'currency',
    currency: acc.currency,
  };

  const finalBalance = new Intl.NumberFormat(
    acc.locale,
    options
  ).format(acc.balance);

  labelBalance.textContent = finalBalance;
};

const calcDisplaySummary = function (acc) {
  const options = {
    style: 'currency',
    currency: acc.currency,
  };

  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = new Intl.NumberFormat(
    acc.locale,
    options
  ).format(incomes);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = new Intl.NumberFormat(
    acc.locale,
    options
  ).format(Math.abs(out));

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = new Intl.NumberFormat(
    acc.locale,
    options
  ).format(interest);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

/////////////////////////////////////////////////
// Event handlers

let currentAccount;
let checkTime;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (checkTime) clearInterval(checkTime);

    checkTime = timer();

    updateUI(currentAccount);
    updateDate(currentAccount.locale);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  if (!currentAccount) return;

  const amount = +inputTransferAmount.value;

  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    const currentDate = new Date().toISOString();

    currentAccount.movementsDates.push(currentDate);
    receiverAcc.movementsDates.push(currentDate);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  if (!currentAccount) return;

  const amount = Math.floor(+inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(mov => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);
    }, 3000);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (!currentAccount) return;

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;

    labelWelcome.textContent = 'Log in to get started';

    if (checkTime) clearInterval(checkTime);

    currentAccount = null;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  if (!currentAccount) return;

  displayMovements(currentAccount, !sorted);

  sorted = !sorted;
});

/////////////////////////////////////////////////
// Current date

const updateDate = function (locale) {
  const dataNow = new Date();

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  labelDate.textContent = new Intl.DateTimeFormat(
    locale,
    options
  ).format(dataNow);
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// console.log(randomInt(10, 20));
// console.log(randomInt(0, 3));

// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('011010', 2));

// console.log(typeof +(2.7).toFixed(2));

// console.log(4589237649879843679586498456n * 1000n);

// console.log(new Date());

// console.log(new Date(2026, 11, 10, 6, 45, 2));
