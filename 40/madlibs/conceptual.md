### Conceptual Exercise

Answer the following questions below:



- What is React? When and why would you use it?
    - React is a front-end JavaScript library primarily used for its focus on modularity, state-management, and component-structured functionality. 

- What is Babel?
    - Babel is a tool used to convert different versions of code into backwards compatible versions of JavaScript to be standardized and usable by more technology.
    - It will transpile JSX into useable JavaScript for us

- What is JSX?
    - JSX is an extension of JavaScript which allows us to use a familiar syntax (html) in order to render components and elements to the DOM 
    - Needs to be transpiled into valid JavaScript

- How is a Component created in React?
    - You simply create the component function in a separate file. Within the file, you return whatever is necessary to be rendered and used from that component and export it so that it can be used by the main App, which has imported it. Babel transpiles the JSX syntax we use into useable JavaScript - Wahlah!

- What are some difference between state and props?
    - useState initializes dynamic state that can be changed within a given component
    - props are static values that are passed into Components to be used and cannot be changed within the component they are passed to
    - Use useState when you need some functionality to be able to change data
    - I.E. a score of a game is state, whether or not the game is won is State but props can hold the board values and grid system

- What does "downward data flow" refer to in React?
    - Downward data flow refers to the heirarchy of data useage in a React app
    - A functional parent app generally will manage the state and pass down functions to children for state or prop usage.

- What is a controlled component?
    - A controlled component is a component that is structured and functions within React. If you render a form where react controls the state of the input, etc, this would be a controlled component where React is controlling and aware of the state of the input.

- What is an uncontrolled component?
    - An uncontrolled component is a component where React does not have control of the state and functionality of the component. The state change is not handled within react, and these are normally seen with other libraries or file management, as react cannot control this.

- What is the purpose of the `key` prop when rendering a list of components?
    - React uses the key prop to keep track of different elements, what should be showing, what has been changed, what distinguishes it etc. It needs to be able to keep your data in sync with what it is rendering, so all keys need to be unique

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    - This is actually what React does if you don't specify a key
    - Things can get confusing if items are being reordered or indexes being changes

- Describe useEffect. What use cases is it used for in React components?
    - useEffect is used to run specific functionality after rendering or state changes on watched dependencies. This is either after a render, initial render, or dependency update generally.

- What does useRef do? Does a change to a ref value cause a rerender of a component?
    - useRef returns a mutable object that persists outside of state rendering/rerenders and will not cause a rerender of a component inherently.

- When would you use a ref? When wouldn't you use one?
    - We need to access an underlying DOM element
    - Setup and clear timers
    - Use for file input or other uncontrolled components, videos, focus, integrate another library, etc.
    - Don't use to manipulate the DOM in other scenarios

- What is a custom hook in React? When would you want to write one?
    - A custom hook is simply functionality, often for state-management, that will be reused
    across multiple components and has therefore been moved into it's own module.
