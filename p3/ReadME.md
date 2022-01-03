# React Coding Interview Challenge 3
View the [end product here](https://emzwk.csb.app/)!

## Specification
Write a functional component to render a button and a list of activities. The list of activities should start out with one activity. When the user clicks the button, an additional activity should be fetched and appended to the list. To generate a random activity, issue a get request to `https://www.boredapi.com/api/activity` — an API for development that does not require authentication. Each request will return a new, random object containing the following fields: activity, type, participants, price, link, key, and accessibility. The values associated with these fields are either strings or numbers. Here is an example of one such object:

```json
{
  "activity": "Take your dog on a walk",
  "type": "relaxation",
  "participants": 1,
  "price": 0,
  "link": "",
  "key": "9318514",
  "accessibility": 0.2
}
```

Each item in the list should display the activity and a button beside it that, when clicked, renders the remaining fields from that activity’s object below it. Here is an example of the final product, where the user has expanded the last activity in the list.

![img](https://miro.medium.com/max/700/1*CFDw6NH0PVlS1SjMxFfp8A.png)

Functionality is most important, but feel free to style the page beyond the basic UI above. Your component should make use of the useEffect() hook. Also, feel free to break up the page’s functionality into subcomponents; in the solution provided below, I use a separate component for list items. Finally, pay close attention to how your application functions when the user repeatedly clicks the Generate Activity button. If your approach is similar to mine, you may run into an issue where list appends overwrite previous ones because they append to stale state.