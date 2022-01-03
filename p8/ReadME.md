# React Coding Interview Challenge 8
View [end product here](https://keck4.csb.app/)!

## Specification
Create a functional component that accepts as a prop an array of question objects and renders a quiz. The quiz displays one question at a time in the order that they appear in the questions array, and it only advances to the next question when the user selects an answer choice. The quiz does not support returning to previously answered questions, although you can attempt to add this functionality later. After the user has answered all the questions, display the user’s score as a percentage. An example input array is given [here](https://github.com/Zmwang622/React-Coding-Challenges/blob/main/p8/quiz.json), but be sure not to assume that there are a fixed number of questions or that each question has a fixed number of answer choices. The “correct” field of each question object indicates the index of the correct answer choice in the answers array.

My solution used the React hook `useState`