### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - React Router is simply a library for client-side routing in React. It allows us to manage the URL, history, and keep the UI in sync while navigating views.

- What is a single page application?
  - A single page application is an application that manages it's state and URL view navigation on the same page-stage, often without refreshing. It loads a single HTML page and all of the necessary assets, and displays pieces at a time that are necessary for the user-desired functionality or view.

- What are some differences between client side and server side routing?
  -  One of the main differences is the frequency of render requests. With server-side routing, the the client/server continuously make requests to render certain views and pages of the application, whereas with client-side routing, the application is loaded initially by the browser, and then can display what is necessary as necessary for the user.
  - This also means that navigation and history is managed client-side, so the page can be updated as the user navigates, instead of refreshed with newly rendered components (server-side)

- What are two ways of handling redirects with React Router? When would you use each?
  - One way is to use a <Redirect> component which can be useful for navigating away from places that people don't need to see or aren't authorized for
  - Another way is to use the .push method on the history object which allows users to use forward and backwards navigation.

- What are two different ways to handle page-not-found user experiences using React Router? 
  - One way is to use a Redirect component at the end of a <Switch> which REDIRECTS us somewhere
  - Another way is to add a path-less route to the bottom of a <Switch> component, which would be a catch all that we can use to RENDER a not-found component.

- How do you grab URL parameters from within a component using React Router?
  - We can use useParams from react-router-dom to destructure an object returned to us that contains the params

- What is context in React? When would you use it?
  - Context is a useful method to essentially manage the scope of props or other data that can be more easily and cleanly accessed by parents and child components alike.
  - They help us more cleanly utilize functionality or data between heirarchies of components
  - They help us avoid prop drilling and the nested pass-down of data, removing those unused-passed props from cluttering and convoluting our codebase

- Describe some differences between class-based components and function
  components in React.
  - Functional components are just javascript that returns a react element, whereas class-based components create a render function which returns a react element. 
  - Class-based components are Stateful, as they implement logic and state, whereas functional components are Stateless, as they accept data and display it more generally, mainly focusing on UI.
  - React lifecycle methods (componentDidMount, etc) are used inside class-based components, whereas we would use useEffect for mounting/state update management with functional components

- What are some of the problems that hooks were designed to solve?
  - Hooks help us simplify large components that are otherwise hard to refactor and test
  - They let us reuse logic across components and lifecycle methods easily and efficiently
  - They let us solve problems that were arising with higher-order components, mix-ins, etc
  - Organization of logic into reusable isolated units