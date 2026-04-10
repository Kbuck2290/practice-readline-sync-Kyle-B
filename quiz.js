'use strict';

const readlineSync = require('readline-sync');

const QUESTIONS = [
  {
    question: 'What are the two numeric data types in JavaScript?',
    choices: ['A) Integer and Float', 'B) Number and BigInt', 'C) Float and Double', 'D) Short and Long'],
    answer: 'B',
    explanation: 'JavaScript has two numeric types: Number (floating-point) and BigInt (arbitrary precision integers).',
  },
  {
    question: 'Which of the following is NOT a primitive data type in JavaScript?',
    choices: ['A) String', 'B) Boolean', 'C) Array', 'D) undefined'],
    answer: 'C',
    explanation: 'Arrays are objects in JavaScript. The primitive types are: string, number, bigint, boolean, undefined, symbol, and null.',
  },
  {
    question: 'What does typeof null return in JavaScript?',
    choices: ['A) "null"', 'B) "undefined"', 'C) "object"', 'D) "boolean"'],
    answer: 'C',
    explanation: 'typeof null returns "object". This is a well-known bug in JavaScript that has been kept for backwards compatibility.',
  },
  {
    question: 'What is the result of 5 + "3" in JavaScript?',
    choices: ['A) 8', 'B) "53"', 'C) NaN', 'D) TypeError'],
    answer: 'B',
    explanation: 'When a number is added to a string, JavaScript coerces the number to a string and concatenates them, resulting in "53".',
  },
  {
    question: 'What is the result of "5" - 3 in JavaScript?',
    choices: ['A) "53"', 'B) "5-3"', 'C) NaN', 'D) 2'],
    answer: 'D',
    explanation: 'The subtraction operator coerces the string "5" to the number 5, so "5" - 3 equals 2.',
  },
  {
    question: 'What does NaN stand for?',
    choices: ['A) Not a Null', 'B) Negative and Null', 'C) Not a Number', 'D) New and Null'],
    answer: 'C',
    explanation: 'NaN stands for "Not a Number". It is the result of an invalid numeric operation, such as 0/0 or parseInt("hello").',
  },
  {
    question: 'Which operator checks for both value equality AND type equality?',
    choices: ['A) ==', 'B) !=', 'C) ===', 'D) ='],
    answer: 'C',
    explanation: 'The strict equality operator (===) checks both value and type. The loose equality operator (==) only checks value after type coercion.',
  },
  {
    question: 'What is the result of Boolean("") in JavaScript?',
    choices: ['A) true', 'B) false', 'C) undefined', 'D) null'],
    answer: 'B',
    explanation: 'An empty string is falsy in JavaScript, so Boolean("") returns false. Other falsy values include 0, null, undefined, NaN, and false.',
  },
  {
    question: 'What is the result of typeof undefined?',
    choices: ['A) "null"', 'B) "object"', 'C) "nothing"', 'D) "undefined"'],
    answer: 'D',
    explanation: 'typeof undefined returns the string "undefined".',
  },
  {
    question: 'What is the result of 2 ** 3 in JavaScript?',
    choices: ['A) 6', 'B) 9', 'C) 8', 'D) 5'],
    answer: 'C',
    explanation: 'The ** operator is the exponentiation operator. 2 ** 3 means 2 to the power of 3, which equals 8.',
  },
];

function displayWelcome() {
  console.log('=========================================');
  console.log('  Values, Data Types, and Operations Quiz');
  console.log('=========================================');
  console.log('Test your JavaScript knowledge!\n');
}

function displayQuestion(questionObj, questionNumber, totalQuestions) {
  console.log(`\nQuestion ${questionNumber} of ${totalQuestions}:`);
  console.log(questionObj.question);
  questionObj.choices.forEach((choice) => console.log(choice));
}

function getUserAnswer() {
  let answer;
  while (true) {
    answer = readlineSync.question('Your answer (A, B, C, or D): ').trim().toUpperCase();
    if (['A', 'B', 'C', 'D'].includes(answer)) break;
    console.log('Invalid input. Please enter A, B, C, or D.');
  }
  return answer;
}

function displayResult(isCorrect, questionObj) {
  if (isCorrect) {
    console.log('✓ Correct!');
  } else {
    console.log(`✗ Incorrect. The correct answer was ${questionObj.answer}.`);
  }
  console.log(`  ${questionObj.explanation}`);
}

function displayFinalScore(score, total) {
  const percentage = Math.round((score / total) * 100);
  console.log('\n=========================================');
  console.log('               Quiz Complete!');
  console.log('=========================================');
  console.log(`You scored ${score} out of ${total} (${percentage}%)`);

  if (percentage === 100) {
    console.log('Outstanding! Perfect score!');
  } else if (percentage >= 80) {
    console.log('Great job! You have a strong understanding of the material.');
  } else if (percentage >= 60) {
    console.log('Good effort! Review the explanations above to strengthen your knowledge.');
  } else {
    console.log('Keep studying! Review the Values, Data Types, and Operations module and try again.');
  }
}

function runQuiz() {
  displayWelcome();

  readlineSync.question('Press Enter to start the quiz...');

  let score = 0;
  const total = QUESTIONS.length;

  QUESTIONS.forEach((questionObj, index) => {
    displayQuestion(questionObj, index + 1, total);
    const userAnswer = getUserAnswer();
    const isCorrect = userAnswer === questionObj.answer;

    if (isCorrect) score += 1;

    displayResult(isCorrect, questionObj);
  });

  displayFinalScore(score, total);
}

runQuiz();
