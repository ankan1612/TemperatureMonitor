#CODING EXERCISE - Angular2/SPA

## Table of Contents
1. Evaluation guidelines
2. Task
    1. User Stories
    2. Technical Tasks and NFRs
3. Sample Data and expected result
4. Detailed instructions

##Evaluation Guidelines 

We want you to demonstrate your ability to write [clean code][uncle bob] which is well [covered][code coverage] by unit tests using Angular2 and Jasmine. In other words, as much as the correctness of the solution (e.g. providing validation), we are looking for proper usage of Angular2 concepts or whatever you deem pertinent to make your code easy to read and to maintain.

Twitter Bootstrap CSS is present in the Plunk, use it or change it to your favorite UI library. Additionally there are some example components to help you get started. 

This exercise can be done in a few hours, but please don’t rush and take the time you need. Just remember that we are looking for quality of code over quantity. Refactor and clean your code.

Don’t forget to have a last look at the Readme before submitting your code. If you have any questions, please send us an email at [AppsDevInterviewProcess@teksystems.com][AppsDev].

Using this plunker project as a seed, Build a Temperature Monitor Single Page Application (SPA) using Angular2.

## User Stories 

### User Story #1
As an anonymous end user, I want to be able to enter a number of temperature records by entering a value and then clicking on the "Add" button.

### User Story #2
As an anonymous end user,  When I click on the "Get Median Temperature" button, I want to be able to see the median of the entered temperature records that I have entered.

### User Story #3
As an anonymous end user, I want to be prevented from entering and invalid value such as strings in the "Temperature" field.

### User Story #4
As an anonymous end user, I want the UI to inform me when an invalid action occured.

### User Story #5
As an anonymous end user, I want a progress bar to see how full my collection of temperatures is.


## Acceptance Criteria and Definition of Done
- For user story #1 and #2. Create an object (or a service) named "TemperatureMonitor". 
- This object MUST have a method named "recordTemperature" that will accept a number value.
- This object MUST have a method called "getCurrentMedian" that will return the median of the recorded values.
- This object MUST be easily reusable and have no coupling with the UI
- The Code that calculates the median MUST be your own (no libraries allowed)
- Enforce a MAXIMIUM of 8 temperatures with appropriate user feedback.
- You MUST unit test all the use cases that you feel is appropriate.
- Twitter Bootstrap CSS is already included in the index file, use it at will

##Sample Data and expected result
```[5, 1, -7, 7, 8, 3] --> [-7, 1, 3, 5, 7, 8] = (3+5)/2 = 4```

```[5, 1, -7, 7, 8, 3, 9] --> [-7, 1, 3, 5, 7, 8, 9] = 5```


##Detailed instructions

- **Fork** this Plunker Project
- Put your name in the "--your name here--" placeholder in the index.html file
- Code
    - Run the tests using the "Run Unit Tests" link. Please run your tests as often as you like
    - Create as many TypeScript, HTML, and CSS files as you feel is appropriate
    - The example components are there to help you get started and can be deleted if you think it appropriate
- Make sure you unit test your code
- Document your thought processes in this readme under the heading "Thought Process"
- Note any resources that you needed to search for during the exercise 
- **Save** + **Freeze** and Send us the link to your forked Plunker

Jasmine documentation can be found [here][Jasmine]

You can find a definition of what a Median is on [wikipedia][Median]

##Thought Process


##Resources

- [Apps Dev Email][AppsDev]
- [Jasmin Documentation][Jasmine]
- [Median][Median]
- [Clean Code][uncle bob]
- [Code Coverage][code coverage]

[AppsDev]: mailto:AppsDevInterviewProcess@teksystems.com
[Jasmine]: http://jasmine.github.io/2.4/introduction.html
[Median]: http://en.wikipedia.org/wiki/Median
[uncle bob]: https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882
[code coverage]: https://en.wikipedia.org/wiki/Code_coverage
