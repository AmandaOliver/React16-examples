# React 16.3

This project aims to ilustrate the differences between the old React way of doing things and the new React 16 version.

## Render props
A render prop is a function prop that a component uses to know what to render.
This is a very useful technique for sharing code between components not a new feature, but it's becoming popular recently.

Here there is a generic overview:

- Think about a component that encapsulate a certain logic that we want to reuse:

```javascript
class SharedComponent extends Component {
  // different methods and state that we want to reuse
  state = {
    info: 'lets pretend we have something useful in here'
  }
  render(){
    // the UI is given by a function that we receive as a prop
    {this.props.render(this.state)}
  }
}
```

- Now we can pass a render prop to the previous component, and modify the way we render the info:

```javascript
class ComponentA extends Component {
  render(){
    <SharedComponent render={({info})=>(
      <div>
        <h1> I am component A</h1>
        <h2>{info}</h2>
      </div>
    )}/>
  }
}

class ComponentB extends Component {
  render(){
    <SharedComponent render={({info})=>(
      <div>
        <h1>I am component B</h1>
        <h3>{info}</h3>
      </div>
    )}/>
  }
}
```

And this is exactly what the Context API uses to share the common state and methods between the different components.
For more info, please check the following links:
- [React docs](https://reactjs.org/docs/render-props.html)
- [Why render props, motivation](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)

## Context API

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

## Portals

React docs define it as:
> Portals provide a first-class way to render children into a DOM node that exists outside
> the DOM hierarchy of the parent component.

We can say in a very simplified way that portals allow you to render parts of the UI of your React app in another place,
it can be even in a different window like in this [example](https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202)


If you have tried to create any UI bit that needed to break-out of it's container in React like modals or tooltips probably you already know how painful it can be, that's the reason why we had some libraries available in npm like [this one](https://github.com/reactjs/react-modal) for modals or [this one](https://www.npmjs.com/package/react-tooltip) for tooltips.
Now we are able to do it easily by using Portals!

### How it works

We just need to call
```javascript
ReactDOM.createPortal(child, container)
```
inside the render method in our component, and then use the component as any other, the events fired from this component will be propagated to the ancestors in the React tree.

### Code example
![Portals](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image9.png)

## Other new features
- New return types for render: [Fragments](https://reactjs.org/docs/fragments.html), strings and array of elements
- [Support for custom DOM attributes](https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html)
- [CreateRef API](https://reactjs.org/docs/refs-and-the-dom.html)
- [Pointer Events](https://reactjs.org/blog/2018/05/23/react-v-16-4.html)
