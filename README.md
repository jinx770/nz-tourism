# Overview
Tourism New Zealand needed a new application/interface that  would allow a user who’s looking to stay places for short periods of time to find suitable accommodation for the user.
I created a web-based application that can display accommodation options to the user relevant to the information submitted.

##File handler
Files are sorted in folders. Each html page has its own javascript file according to its name:
index.html = home.js
create.html = formHandler.js
edit.html = edit.js
results.html = resultHandler.js
accommodation.html = selectedAccommodation.js

##What to expect
Starting off at the home page you are able to navigate the burger menu, you do need to go through the process of creating a booking via create or book now buttons to access edit booking else it'd cause an error. Once you get to the form you are able to enter reasonable inputs before clicking search. The application will now take you to another site with the data you entered earlier using localStorage. The page will show you relevant results based on your inputs, if there are none you've entered something incorrectly. Clicking on one of the results will take you to another page, saving what you clicked on via localStorage once again. You are able to select what meal package you want as well as book. On the page you can see the total cost for how many nights you selected, the people count and what sort of house it is. Booking it will allow you to visit Edit bookings where you can cancel or update the information. 



## Resources
- Skeleton Framework - http://getskeleton.com/
 Skeleton is the backbone of project as it serves as a basic but smaller framework.

- Unsplash API - https://unsplash.com/developers  
I used the unsplash api to generate images with queries relative to regions selected.

- Moment JS - https://momentjs.com/
Moment JS is a small js library used for collected time, I used it to collect the date for form validatdion.

## Validation
Validation for the code has been completed, there are no problems within the JavaScript code, as for html and css both have been validated and are correct. Although the JS may not error, after running my code through a JS Linter there were a few errors I was unable to resolve, such as 80 character errors when I'm unable to shorten it. Used https://jshint.com/ as a reference.

## Style Guide
I used and referenced airbnb styles guide (https://github.com/airbnb/javascript) throughout my coding. Airbnb revolves around efficient programming, knowing how to optimise code while keeping functionality.


```js
let foo = [1, 2];
let bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```
- Complex types throughout the code, not having hard values.


```js

// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}
```
- Replacing declarations with let or const over var, to avoid reassigning refferences.


```js
let lukeSkywalker = 'Luke Skywalker';

// bad
let obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
let obj = {
  lukeSkywalker,
};
```
- Using property value shorthands.

And other examples found on their documentation guide.
https://github.com/airbnb/javascript

## Usage
The application uses localStorage to store the relevant information collected from each process/steps through the website. Simply enter correct and appropriate inputs and proceed through the steps.  
```js
searchButton.addEventListener('click', () => {
    // Pass inputs to a function
});
```

## Known Issues
N/A

## Disclaimer
Validation for the code has been completed, there are no errors or data leakage.
Given the opportunity I would complete the edit bookings page as it is not done.
