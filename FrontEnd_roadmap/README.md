## Resources



#### react-guide-for-beginners

[udemy link](https://www.udemy.com/course/react-guide-for-beginners/learn/lecture/8912376#overview) video: 5 hours

##### 1. Getting Started

[folder](react-guide-for-beginners/notes _ review)

[pdf note](react-guide-for-beginners/notes _ review/Section 1 Notes.pdf) 

* create-react-app [github](https://github.com/facebook/create-react-app) 
  * [doc dev](https://create-react-app.dev/) 

##### 2. React &  JSX

JSX is a templating engine

- Some differences in prop names (className)
- Make sure you close all HTML 

Component is a chunk of modular code used for rendering HTML in React

- Has lifecycle events, {variables} can be passed in
- Descriptive error messages help you remember to close tags, etc
- You can loop variables
  - methods
  - Interface updates
  - rendering
  - binding
  - Multiple components

- Attach events to onClick or onChange handlers 

ES6, ES7 syntax

- .map(), .ﬁlter(), const, () => {}
- Try to get used to using this



##### 3.State & props

State and props manage data

- Ways to manage modular data in React
- You will be using these constantly

State is internal to a component

- Use` this.setState({}) `to set the state, not directly this.state = ‘whatever’
- Set up in `constructor()` function
- Can have multiple complex variables inside state



##### 4.Data Libraries

Libraries

- Open-source code packages, installable and reusable and editable
- React-Bootstrap and React-Select, using NPM
- Using import to manage packages and modular code
- Ensure you are following install instructions closely



Packege install 

* React-Bootstrap, interface setup
  React-Select searchable list

[React Bootstrap](https://react-bootstrap.github.io/)  ; [React-Select](https://react-select.com/) 

React-Bootstrap can give you some nice fast initial styling using custom components Use documentation for packages!

19. JSON or external AJAX data

* fetch( ) 
* https://www.json-generator.com/

```
  fetch('http://www.json-generator.com/api/json/get/bVDxTQSDQO?indent=2', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
    .catch(error => console.log(error));
}
```

- Using componentDidMount() for initial data GET call
- Can load into state, or use to manipulate state, etc.

 





##### 5. Actions, Reducers, Redux

Data ﬂow

`react data flow`

- Unidirectional, Components -> Actions -> Reducers -> Store -> Container -> Component
- Use this ﬂow to your advantage 
- [Introduction to Redux](https://rangle.github.io/react-training/redux-intro/) 
  - ![Redux Flow](https://rangle.github.io/react-training/img/redux-flow.png) 

Flux vs Redux

* [Flux vs. Redux: A Comparison - Dakota Lillie - Medium](https://medium.com/@dakota.lillie/flux-vs-redux-a-comparison-bbd5000d5111) 
* [Redux vs Flux - 10 Important Differences (With Infographics)](https://www.educba.com/redux-vs-flux/) 



Get used to installing boilerplate that sets up the wiring you need and the folder structure outlined in the videos 



Actions

- Do AJAX calls or send information that should be shared across whole app
- Can put some logic in here or in a Container with mapDispatchToProps() (next section)
- Avoid too much logic here if possible, keep it minimal
- Actions ﬁred from components, and wrapped in a dispatch function 

Reducer

- Need to create individual reducers for combineReducer() function
- Contains state variable relative to that reducer, which is connected to the global state
- Is interlinked with the Store 

Container

- Wraps the component and manages component props
- Can contain dispatch() functions that ﬁre actions





To install the stable version:

```
npm install --save redux
```

6. Github project 