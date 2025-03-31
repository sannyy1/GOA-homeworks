/*
# 1. შექმენით ფუნქცია, რომელიც შეამოწმებს შეტანილი რიცხვი ლუწია თუ კენტი.
ამისათვის მომხმარებელს შემოატანინეთ რიცხვი და გადაეცით არგუმენტის სახით.
ფუნქცია შექმენით 3 გზით. 1. named function   2. anonymus function    3. arrow function.
*/

function checkEvenOdd(number) {
    if (number % 2 === 0) {
      console.log(`${number} არის ლუწი`);
    } else {
      console.log(`${number} არის კენტი`);
    }
  }
  
  const userNumber = prompt("შეიყვანეთ რიცხვი:");
  checkEvenOdd(parseInt(userNumber));