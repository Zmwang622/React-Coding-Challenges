# React Coding Interview Challenge 9
View [end product here](https://8scpt.csb.app/)!

### Specification
Write a component to render a searchable list of random users. You can fetch the users by issuing a get request to `https://randomuser.me/api?results=number` where *number* is the number of users you want to receive. Randomuser.me is a free, no auth-token API for development. When initially writing your component, query for only a couple of users, as your requests may be blocked if you accidentally issue too many for several hundred users. 

[Here](https://github.com/Zmwang622/React-Coding-Challenges/blob/main/p9/data.json) is an example of the data return from a request for one result.

You will only need to access the title and name fields, though. Display the users in a list including their title followed by their first and last name. Include above the list a text input field that filters the list of names by prefix, like an autocomplete tool, as the user types. The component should also ignore the text case (both in the input and in the names) when filtering the names. Here is a GIF of the finished product in action:

![gif](https://miro.medium.com/max/207/1*pzsYitOYw-YPlJPg2DuR8g.gif)

My solution used the hooks `useState` and `useEffect` as well as `axios`. 