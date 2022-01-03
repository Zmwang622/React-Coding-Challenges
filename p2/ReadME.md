# React Coding Interview Challenge 2
View the [end product here](https://ydswn.csb.app/)!

## Specification
Write a functional component that includes a text input field and, below it, a list of images. At the start, the list should be empty. When the user submits some string input-string, the function should append the robot image corresponding to that string to the current list of images.

The source of the image is `https://robohash.org/input-string`. Robohash provides unique images for any text. For example, put `https://robohash.org/hello` in your browser and you’ll see the image on the left. Put any other string, and you’ll see a different image.

When a user clicks on a robot image, the image should be removed from the list. Finally, if you are inclined to take on styling details, center the input field and display the robot list in centered rows that wrap to the next line after exceeding the page’s width. After entering many robots, the page should look something like this:

![img](https://miro.medium.com/max/700/1*ITs0j-PrheFfOWa0I6m7EA.png)

I used the `useState` React hook in my solution.