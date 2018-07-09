This project aims to ilustrate the differences between the React-Redux way of sharing state and the new ContextAPI introduced in the new React 16.3 version.

## Comparison
The main differences are the following:

### Redux actions creators and reducers become react component state and methods
![Class State and methods vs Redux actions and reducers](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image1.png)
### mapStatetoProps disappear, and we just render the consumer with a 'render-prop' component
![Content, access state](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image2.png)
### the same with mapDispatchToProps
![Logout, access actions and state](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image3.png)
### We initializate the provider in the same way, just passing 'value' prop instead of 'store' and creating a context
![Provider init](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image4.png)

## Pros and cons

- Pros:
1. More flexibility, we can have different nested contexts
2. Faster to develop
3. Less external dependencies
4. Happens very often that we use Redux innecesarily, with this approach those situations are easier to spot, as we have much less code complexity.

- Cons:
1. It's a very new API, we may have not discovered all the constraints that this approach imply.
2. Dev toold not so good, no actions inspection.
