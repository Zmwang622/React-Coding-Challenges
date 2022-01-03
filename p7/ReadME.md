# React Coding Interview Challenge 7
View the [end product here](https://ffpzk.csb.app/)!

## Specification
Create a functional component that renders a text input field and displays a list of the strings that the user has entered below it. Each string in the list should be displayed wholly if it has fewer than 6 characters. If not, it should be displayed as the first five characters of the string followed by ellipses. When the user clicks on a string from the list, a modal should popup containing the complete text of the string. The modal should be centered on the page, and it should block the input field. The modal should close when the user clicks outside of it (you should add a border or background to the modal to test that this functionality is included).
The picture below shows the component after the user has entered three strings: “Hi, my name is Justin”, “What is your name?”, and “hello”.

![sc](https://miro.medium.com/max/2400/1*gSM-nCL7hEhw0dT9aIhOTg.png)

The picture below is the state of the component after the user selects “Hi, m…” from the page above.

![img](https://miro.medium.com/max/2400/1*IqdK-reu-jZDBGZMTRXjsQ.png)

Again, the black square will only disappear and reveal the input field and list when the user clicks outside of it.

My solution used the following React hooks: `useState`, `useRef`, `useEffect`.