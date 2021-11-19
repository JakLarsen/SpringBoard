- EXAMPLE BUG #1: add() doesn't add positive version of y




- BUG #1: User.getAll() has 2 unnessary parameters: 'username' and 'password'
    - SOLUTION: Remove the parameters. 
- BUG #2: User.getAll() should not be returning email and phone
    - SOLUTION: Remove them from the query
    - TESTED with expect(users).toEqual() and omitting those parameters
- BUG #3: User.update() allows patching of username and password
    - SOLUTION: Delete the username and password fields if they are sent with the body
    - TESTED with data sent to update username and password if they are there in the body
- BUG #4: PATCH('/users/:username') Should not have isAdmin middleware
    - We need to allow non-admin, but same users to still have access
    - TESTED: same user has access but not non-users
- BUG #5: POST ('/auth/login) is not awaiting the User query response which is a promise.
    - This is leading to 'admin' not being saved to the payload.
    - SOLUTION: Add 'await' keyword to await the promise
    - TESTED
- BUG #6((Same as 5)): authUser not receiving 'curr_admin' from payload
    - SOLUTION: Add 'await' keyword in POST ('/auth/login) to return proper user object
- BUG #7: authUser not VERIFYING our jwt with the SECRET_KEY, but instead decoding without verifying. BAD
    - SOLUTION: Verify with SECRET_KEY


- CHECKLIST:
    - users routes
        - GET ('/') should not be required to send parameters to the model Users.getAll()
        - GET ('/') working and tested
        - GET ('/') should not return email and phone
        - GET ('/') working and tested

        - GET ('/:username') working
        - GET ('/:username') throwing error properly if no username found

        - PATCH ('/:username') should not allow updating of username or password
        - PATCH ('/:username') TESTED with username and password updates

        - DELETE ('/:username') Works as admin
        - DELETE ('/:username') Does not work if just another user or no token


