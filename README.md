# Redux I

Redux is a tool that will remoe our state from components and into one single source of truth that is unrelated to any components. We can set components up to listen to changes and view those actions from those changes insde of what we call a store.

## Store

You can think of the store as your single source of truth. This is where we will keep all of our data that we want to share between components.

```js
import { createStore } from 'redux'

// SOME JSX

export default createStore(reducerFunc)
```

## Initial State

We generally will set up an initial state which will be our base values for our application.

## Action Types

We will declare action types, or events that will fire our reducer function. These should be written in all caps and as constants. The reason for this is that it will catch more errors. If we try to fire an action called `UPDATE_USER` but accidentally type `UPDAT_USER`, it won't crash the app and we will get an warning that it isn't sure what `UPDAT_USER` is.

## Reducer

A reduce is simply a function that takes in two items; 1: a state which we generally set to our default state and 2: an action we can switch on.

```js
  switch(action.type){
    case CASE_1:
      return {...}
    case CASE_1:
      return {...}
    default:
      return state
  }
```

## Subscribe

We can have each comonent we want to know about redux subscribe to the entire store. This means that it can get data as it is updated from our initial state

## Dispatch

We can have our components dispatch action to trigger chanes in our reduce and update our state.