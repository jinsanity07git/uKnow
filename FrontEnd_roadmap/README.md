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

  

 





5. Actions, Reducers, Redux
6. Github project