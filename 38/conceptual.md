### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

  - A JWT is a jsonWebToken, which provides a way to securely transmit information between parties as a json object


- What is the signature portion of the JWT?  What does it do?

  - The signature is a way to authenticate that the user is the intended user, either by providing an accepted secret, key, or token. These can go through encryption or not, depending.


- If a JWT is intercepted, can the attacker see what's inside the payload?

  - Yes, they sure can. They can also utilize any functionality of the app as if they were that authenticated user. This is why we often give tokens expiry dates.


- How can you implement authentication with a JWT?  Describe how it works at a high level.

  - Essentially, the way we have been using is to create a middleware function that runs before all of our routes that need to have some sort of authentication. This middleware function requires a previously-authenticated token in the body or header that a user would receive when logging in and validating their username/password credentials, etc. If the token they have submitted is valid and signed by a trusted user, we give them access to the route and add their payload data to the request or header for future use.
  - Otherwise, we don't.

- Compare and contrast unit, integration and end-to-end tests.

  - Unit tests test a small block of functionality, usually a single function or functional piece etc.
  - Integration tests test how different pieces function together to make sure that, although they may work separately, do they interact with each other as intended.
  - End to end testing deals with product-like circumstances, testing often from a user perspective to try and assure that intended functionality is actually what is being given to a user

- What is a mock? What are some things you would mock?

  - Mocking is used often in unit testing to substitute a method, etc. when you need to test behavior of a function or section of code but not its exact functionality. I.E. if you have an impractical piece of funcitonality where you are simply trying to test if another piece of functionality works if the first gives you a number, you can mock the first to a simple function that provides an expected number.

- What is continuous integration?

  - Continuous integration is the automation and consistent integration of code changes from multiple contributors on a software project - (think git)

- What is an environment variable and what are they used for?

  - An environment variable is one whose value is set outside the program itself which can be loaded and accessed by the program
  - They are often used to prevent the need for re-release of the application due to changes that wouldn't alter it's functionality and usability.

- What is TDD? What are some benefits and drawbacks?

  - Test driven development is the practice of first creating tests for the function that you are planning on implementing, and then building functions that pass those tests
  - It's advantages include generally more resilient and functional architecture that has been preplanned and constructed as well as forcing testing on your code as you go
  - It is however, generally slow to incorporate and pieces will be created at a generally slower rate due to test creation prior to implementation.

- What is the value of using JSONSchema for validation?

  - You can not only enforce a standard for the validation code being submitted, but you can also give a blueprint as to how that code should be submitted.

- What are some ways to decide which code to test?

  - Coin Toss
  - Phone a friend
  - I mean, honestly test all code that could impact the functionality, scalability ease of use, etc. all other important metrics for a user/security/workflow

- What does `RETURNING` do in SQL? When would you use it?

  - RETURNING returns values so that you don't need to run another query when you insert, update, etc in a statement
  - I.E. you can update a statement and return the values instead of updating and then querying again to retrieve the values

- What are some differences between Web Sockets and HTTP?

  - Web sockets update requests as they are available, whereas HTTP requires a constant request for update
  - Web sockets can work bidirectionally

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  - Flask was a bit simpler to use, as there wasn't as much of an architectural overhead, but I appreciate Express a bit more for the structure of it once you do get it down. On a side note, I enjoyed learning more about
  - SQL with Express instead of abstracting it away with Flask SQL Alchemy.
  - I realise that is not a flask vs express answer, but yeah.
