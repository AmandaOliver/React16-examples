# React 16.3

This project aims to ilustrate the differences between the React 16.0 way of doing things and the new React 16.3 version.

## Redux vs Context API

If you're using Redux only for avoiding passing props down the React tree then you should consider Context API instead (probably you didn't need Redux in the first place).

On the other hand, if you use Redux with redux-sagas or redux-thunk to maintain a global state that get's updated with API requests you still need Redux.

This new Context API is intented exclusively to avoid passing props down, which is not the main aim of Redux although it was commonly used to solve this "problem".

### Comparison
The main differences are the following:

#### Redux actions creators and reducers become react component state and methods
![Class State and methods vs Redux actions and reducers](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image1.png)
#### mapStatetoProps disappear, and we just render the consumer with a 'render-prop' component
![Content, access state](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image2.png)
#### the same with mapDispatchToProps
![Logout, access actions and state](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image3.png)
#### We initializate the provider in the same way, just passing 'value' prop instead of 'store' and creating a context
![Provider init](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image4.png)

### Pros and cons

- Pros:
1. More flexibility, we can have different nested Providers and Contexts
2. Faster to develop
3. Less external dependencies
4. Happens very often that we use Redux innecesarily, with this approach those situations are easier to spot, as we have much less code complexity.

- Cons:
1. It's a very new API, we may have not discovered all the constraints that this approach imply.
3. It only allows for a Consumer to read values from a single Provider type, one consumer to one provider.

## Error Boundaries

Error Boundaries are React components that wraps others, they don't have their own UI, just catch errors that may happen in one of the child components, and renders a fallback UI.

For making a component behave like an Error Boundary, it should implement the method 'componentDidCatch' and define a fallback UI that will be rendered if an error happens.
ComponentDidCatch method works as a catch block in vanillaJS so it won't catch errors happening within himself, or in asynchronous code, or in event handlers.

This new feature allow us to not break the whole component tree if there is a failure. We can nest different error boundaries in our structure.

### Comparison

#### No error boundary defined, when we throw an exception all the app crashes
![No error boundary](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image5.png)
#### Error boundary defined, when we throw an exception only the components wrapped crashes with a fallback UI
![With error boundary](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image6.png)

### Code example

#### Error Boundary component
![Error boundary](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image7.png)
#### Usage
![Error boundary usage](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image8.png)

**** Note: As in development env we get a detailed view of the errors to see this example in the example projects it's necessary to run it in production mode with
```
npm run start:prod
```
