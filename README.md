# React 16

This project aims to ilustrate the most important features in the new React 16 version.
In the repo you will find two separate projects, Redux and ContextAPI one, each of them can be run separately and produces independent bundles.
The Redux one does not contain the example journeys used to explain error boundaries and portals, it's only present to show the differences between Redux and ContextAPI implementing a basic app global state.

## Render props

A render prop is a function prop that a component uses to know what to render.
This is a very useful technique for sharing code between components, not a new feature, which has become popular recently.

Here's a generic overview:

- Think about a component that encapsulates a certain logic that we want to reuse:

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

- Now we can pass a render prop to the previous component to define how we render the info:

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

This is exactly what the Context API uses to share the common state and methods between the different components.
For more info, please check the following links:

- [React docs](https://reactjs.org/docs/render-props.html)
- [Why render props, motivation](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)


## Context API

From [React Docs](https://reactjs.org/docs/context.html):
> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
We have been using Flux libraries like Redux, for years, even though they add unnecessary complexity, solely to avoid the so called "prop-drilling". 

If you're using Redux only fto avoid passing props, then you should consider Context API instead ([probably you didn't need Redux in the first place](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)).

This new Context API is intented exclusively to avoid passing props down the React tree, which is not the main aim of Redux even though it is commonly used for this purpose. Even if we compare them in this project, please keep in mind that we are comparing the most common missuse of Redux vs ContextAPI.

## How to use it

First, we need to declare a Context:

``` javascript
const ourContext = React.createContext('default conext');
const { Provider, Consumer } = ourContext;
```

CreateContext method creates a { Provider, Consumer } pair. When React renders a context Consumer, it reads the current context value from the closest matching Provider above it in the tree and if there is none available it will grab the default one.

Then, wrapping all the components that need access to the data in the 'store' we define a Provider:

```javascript
<Provider value={info: 'very useful information'}>
  <ComponentA/>
</Provider>
```

We are now able to use a Consumer to access the data in the global app store:

```javascript
class ComponentA extends Component {
  // class methods, state, and whatever needed...
  render(){
    <Consumer>
      {info =>
        <p>{info}</p>
      }
    </Consumer>
  }
}
```

Now, everytime that a value in our store gets updated the components that use them will be re-rendered.

### Comparison

The main differences are the following:

#### React component state and methods instead of Redux actions creators and reducers

Files involved:

- [ContextAPI/src/App.js](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/ContextAPI/src/App.js)
- [Redux/src/actions.js](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/Redux/src/actions.js)
- [Redux/src/reducer.js](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/Redux/src/reducer.js)

![Class State and methods vs Redux actions and reducers](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image1.png)

#### We render the consumer with only a 'render-prop' component, so mapStatetoProps disappears

Files involved:

- [ContextAPI/src/Components/Content.js](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/ContextAPI/src/Components/Content.js)
- [Redux/src/Components/Content.js](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/Redux/src/Components/Content.js)

![Content, access state](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image2.png)

#### the same with mapDispatchToProps

Files involved:

- [ContextAPI/src/Components/Logout.js](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/ContextAPI/src/Components/Logout.js)
- [Redux/src/Components/Logout.js](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/Redux/src/Components/Logout.js)

![Logout, access actions and state](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image3.png)

#### We initializate the provider in the same way, just passing 'value' prop instead of 'store' and creating a context

Files involved:

- [ContextAPI/src/UserDataContext.js](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/ContextAPI/src/UserDataContext.js)
- [ContextAPI/src/App.js](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/ContextAPI/src/App.js)
- [Redux/src/App.js](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/Redux/src/App.js)

![Provider init](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image4.png)

### Pros and cons

- Pros:
1. More flexibility, we can have different nested Providers and Contexts
2. Faster to develop, given the reduced learning curve
3. Less external dependencies
4. It often happens that we use Redux unnecessarily. These situations are easier to spot with this approach, as we our code is simpler

- Cons:
1. It's a very new API, we may have not discovered all the constraints that this approach implies.
2. Thanks to Redux immutability the developer experience is a lot more interesting than with Context. With Redux Dev Tools we can submit actions, get a history of changes over the global state, etc.
3. It only allows for a Consumer to read values from a single Provider type, one consumer to one provider.

## Error Boundaries

[Error Boundaries](https://reactjs.org/docs/error-boundaries.html) are React components that wraps others, they don't have their own UI, just catch errors that may happen in one of the child components, and render a fallback UI.

To make a component behave like an Error Boundary, it must implement the method 'componentDidCatch' and define a fallback UI that will be rendered if an error occurs.
ComponentDidCatch method works as a catch block in vanillaJS so it won't catch errors happening within himself, in asynchronous code, or in event handlers.

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

We can say in a very simplified way that portals allow us to render parts of the UI of our React app in another place,
it can be even in a different window like in this [example](https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202)

If you have tried to create any UI bit that needed to break-out of it's container in React, like modals or tooltips, you probably already know how painful it can be. That's is why we have some libraries available in npm like [this one](https://github.com/reactjs/react-modal) for modals or [this one](https://www.npmjs.com/package/react-tooltip) for tooltips.
Now we are able to do it easily by using [Portals](https://reactjs.org/docs/portals.html)!

### How it works

We just need to call

```javascript
/**
 * The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.
 */
ReactDOM.createPortal(child, container)
```

inside the render method in our component, and then use the component as any other, the events fired from this component will be propagated to the ancestors in the React tree.

### Code example

![Portals](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image9.png)

## New lifecycles

The React team is preparing a major change in React components' lifecycle. As you may already know, renderization is synchronous at the moment but it's going to change soon.
![Async chart](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image10.jpg)

In order to prepare for this change React is advising us to stop using the following methods or to prepend them with 'UNSAFE_' prefix to fix it later on:

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

as they may be called several times during renderization with the new async mode generating inconsistencies.

From React 17.0 these methods will be removed (only available with UNSAFE_ preffix) so we will need to use new ones:

- getDerivedStateFromProps
- getSnapshotBeforeUpdate

you can find more information about the new methods, as well as migration guidelines, in this [link](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)

## StricMode Component

In order to make the migration task easier, and highlight potential problems, we now have a [StrictMode Component](https://reactjs.org/docs/strict-mode.html) available.
This component doesn't produce any UI, and doesn't run on production mode, it just activates additional checks and warnings like:

- Identifying components with unsafe lifecycles
- Warning about legacy string ref API usage
- Detecting unexpected side effects
- Detecting legacy context API

additional functionality will be added with future releases of React.

To use it just wrap your components with ```<React.StrictMode>``` tag.

![StrictMode](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image11.png)

In our example project we have a dependency on Formik, which hasn't had it's classes updated, and is showing a Warning when running the app:

![ConsoleStrictMode](https://github.com/AmandaOliver/Redux-vs-contextAPI/blob/master/images/image12.png)

## Other new features

- New return types for render: [Fragments](https://reactjs.org/docs/fragments.html), strings and array of elements
- [Support for custom DOM attributes](https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html)
- [CreateRef API](https://reactjs.org/docs/refs-and-the-dom.html)
- [Pointer Events](https://reactjs.org/blog/2018/05/23/react-v-16-4.html)
