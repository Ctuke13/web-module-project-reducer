# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.

- When the 1 button is clicked the handleAddOne function is triggered

- The handleAddOne function returns a dispatch function which is called from the useReducer hook.

- The dispatch function calls the addOne function to use its returned value as an action to then run the reducer function from ./reducers/index.js

- The addOne function returns an object containing the type: ADD_ONE.

- The ADD_ONE variable contains a string of 'ADD_ONE'.

- The reducer function responds by taking the string from the title and the current state as a parameter. Based of the parameters the reducer function determines to run the case pertaining to that string which returns an object containing a copy of the state with a change to the total key using state.total and adding 1.

- TotalDisplay shows the total plus 1.
