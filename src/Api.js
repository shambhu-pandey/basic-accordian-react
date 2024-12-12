export const questions = [
  {
    id: 1,
    question: "What is the virtual DOM?",
    answer: "The virtual DOM is a lightweight representation of the real DOM. React uses it to optimize updates by comparing the previous and current versions of the virtual DOM and applying the minimal necessary changes to the real DOM."
  },
  {
    id: 2,
    question: "What are React hooks?",
    answer: "React hooks are functions introduced in React 16.8 that allow developers to use state and other React features in functional components."
  },
  {
    id: 3,
    question: "What is JSX in React",
    answer: "JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM without using functions like `createElement` or `appendChild`."
  },
  {
    id: 4,
    question: "What is the diff btw a class component and a functional component in React?",
    answer: "Class components use ES6 classes and can hold state, while functional components are plain JavaScript functions and, before hooks, could not manage state or lifecycle methods."
  },
  {
    id: 5,
    question: "What is prop drilling in React?",
    answer: "Prop drilling is the process of passing data from a parent component to a deeply nested child component through multiple layers of intermediary components."
  },
];
