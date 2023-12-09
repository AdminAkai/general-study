interface QuestionAnswer {
  question: string
  answer: string
}

export const QuestionsAnswers: QuestionAnswer[] = [
  {
    question: "What's a Promise in Javascript",
    answer:
      "Javascript's way of handling asynchronous operations, represented by an object that is either fulfilled or rejected method.",
  },
  {
    question: 'When would you choose async/await vs then/catch approach',
    answer:
      'You would choose async/await for both versatility and readability. It is much easier to both read and run an async operation and await for the result in a variable rather than be launched into callback hell with the .then approach.',
  },
  {
    question: 'What if an error is thrown during the async/await',
    answer:
      'If an error is thrown in an async/await function then it short circuits unless handled in a try/catch block',
  },
  {
    question:
      'What is type coercion and how does this impact the == and === operator behavior',
    answer:
      "Type coercion is when Javascript changes the data type of a value in order to be able to use them in an operation. This means 2 == '2' will be true as they will both be type casted into number, while 2 === '2' will be false as it is a strict equality operation which also evaluates the type.",
  },
  {
    question: 'What is the DOM and how does it relate to React',
    answer:
      'The DOM is the document object model, and a way for Javascript to interact with the webpage and allows it to be manipulated, without it React would not exist',
  },
  {
    question: 'What about the Virtual DOM and why is it useful',
    answer:
      "The Virtual DOM is React's way of rehydrating the HTML on the web page with new data from state or async calls, and React updates the real DOM based on the diff between the real DOM and the virtual DOM",
  },
  {
    question: 'Whats the lifecycle of a React Component',
    answer: 'The lifecycle is mounting, updating, and unmounting',
  },
  {
    question:
      'What would it look like in a React component to make an API call and render the results',
    answer:
      'You would use a hook to handle the side effect of making an API call and render the data in the return/jsx of the function',
  },
  {
    question: 'What are custom hooks and when would you use them',
    answer:
      'Custom hooks are basically React functions that have an internal state and useEffect and return that state rather than return a component, you would use them whenever you want to abstract a side effect to be re-used in other React components',
  },
  {
    question:
      'If you had to keep state across the entire app, how would you do this?',
    answer:
      'I would use Redux to maintain a global state tree, but an alternative solution would be React Context API which is what React Redux uses under the hood',
  },
  {
    question: 'When would you use Redux vs Context API',
    answer:
      "Personally for me, all the time, as long as the project is architectured well then Redux's state abstraction is a lot more readable and easier to scale than making a million Contexts",
  },
  {
    question:
      'How is uniqueness determined when rendering multiple elements with a for loop',
    answer: 'Key property on the parent tag of that element',
  },
  {
    question:
      'How do you prevent unnecessary rendering of a component when given the same input',
    answer:
      'Memoize the component with memo(), if it only affects a certain computation or function though then useMemo or useCallback will also suffice, and if you ONLY need the component to re-render based on specific props then it can be added to the dependency array of a useEffect hook',
  },
  {
    question:
      'If we had to listen to a number of mouse clicks inside a React component, how would we do that efficiently?',
    answer:
      'If it was just general mouse clicks and not anything specific to a React Node then I would assign an event listener in a useEffect hook and clean it up in the return',
  },
  {
    question:
      'Why is it important to clean up the event listener you mentioned',
    answer:
      "Its important because when the component unmounts the listener remains as it is attached to the window, so you want to avoid memory leaks by cleaning it up, but also because on every re-render it'll attach a new event listener to the window.",
  },
]
