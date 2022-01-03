# React Coding Interview Challenge 6
View the [end product here](https://3mvkb.csb.app/)!

## Specifications
Create a functional component to render a list of tasks (along with their subtasks) from an object. The subtasks should be organized into two columns, completed and to be completed, based on the boolean value associated with each task. The object will have the following format: any number of keys where each key is the text of the task, an array of any number of objects associated with each key, and finally, an object with one field (the subtask text) and one associated boolean value at every index of the array. Here is an example of one such object:

```js
const INITIAL_LIST = {
  "Organize closet": [
    { "Donate old clothes and shoes": false },
    { "Buy new shelf": false },
    { "Put in shelf by color": false },
  ],
  "Finish homework": [
    { "Finish math homework": false },
    { "Finish science homework": false },
    { "Finish Reactjs homework": false },
  ],
  "Achieve nirvana": [
    { "Meditate a little": false },
    { "Gain some wisdom": false },
  ],
};
```

When the user clicks on an uncompleted subtask, it should move from the uncompleted list to the completed list. Likewise, when the user clicks on a completed subtask, it should move from the completed list to the uncompleted list. Here is the initial state of the page:

![img](https://miro.medium.com/max/549/1*oZ6_Z9fVg5_nQgtRyHO9Sw.png)

Here is the page after the user has clicked on the subtasks, “Donate old clothes and shoes” and “Finish math homework”.

![img](https://miro.medium.com/max/700/1*jk5mpmj0y95xVEyJhzRCUQ.png)

I used `lodash` to deep clone the array and the `useState` hook.