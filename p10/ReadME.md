# React Coding Interview Challenge 10
View [end product here](https://pu7td.csb.app/)

## Specification
Write a functional component that accepts as a prop an array of integers and renders a diagram of mergesort’s divide sequence in action. For those unfamiliar, mergesort is a divide and conquer algorithm that recursively splits an array in half until it has been reduced to arrays of size one. It then works back up the recursive tree, joining the subarrays into sorted order. The algorithm’s worst and best case complexities are both n*log(n). Your component need only display the first phase of the algorithm: the recursive splitting of the array until every segment has reached size one. For example, consider the following array:
`const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 5, 3, 5, 7, 4, 2];`

For the array above, the component should display this page:

![img](https://miro.medium.com/max/700/1*_2dyUGKfkJk6_SvqjUVsxA.png)

For arrays of an odd size, the right subarray should have one more element than the left subarray after the split.
Up to this point, the challenges have emphasized functionality and generally have not required any styling. This challenge, though, will test your ability to organize containers. Though my solution uses flexbox, feel free to conduct styling however you are most comfortable.



