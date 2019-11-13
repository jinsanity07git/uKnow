###   Building a ReactJS Website

#### 11. React website setup

* Web template [link](https://startbootstrap.com/themes/agency/)

```bash
(base) jinsanity-pro:UtopiaPortal jinsanity$ create-react-app ulander



(base) jinsanity-pro:UtopiaPortal jinsanity$ cd ulander

(base) jinsanity-pro:ulander jinsanity$ npm start
```

#### 12. Component children

1. Copy 

   From 

   ![image-20191112130653525](https://tva1.sinaimg.cn/large/006y8mN6gy1g8vum237pbj30j80aitav.jpg)

   to  ![image-20191112130619630](https://tva1.sinaimg.cn/large/006y8mN6gy1g8vull1fh7j30jk0ae0up.jpg)



```html
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```





Create `PapeWrapper.js`

* Replace html to jsx 
  * `class`  => `className` 

```jsx
import React,{Component} from 'react';

class PageWrapper extends Component {

    render() {

        return (       
        <div>
      </div>
      )
 
    }
}

export default PageWrapper;
```



In `App.js` import  PageWrapper 





#### 13. React routing

React-router-dom

* [react-router-dom - npm](https://www.npmjs.com/package/react-router-dom) 

```
npm i react-router-dom
npm install --save react-router-dom
```

* https://reacttraining.com/react-router/



```jsx
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';       

				<Router>
            <Route
             path ="/home"
             component={Home}
             />
          </Router>
```

<a> =>  <Link?>

href= => to=



#### 14-15. Route parameters and HTML slicing part 1&2

 ```jsx
            <Route
             path ="/about"
             render={() => {
                return (
                  <h1>I am the about</h1>
                ) 
              } }
             />
 ```





`<br>` => `<br \>`

`<img alt="">` =>  `<img alt=""/>`



```jsx
<header className="masthead" style={{backgroundImage :'url("' + this.props.image + '")'}}>
  
  
 <header className="masthead" style={{backgroundImage : 'url(${this.props.image})'} }>
   
 <header className="masthead" style={{backgroundImage : `url(${this.props.image})` }}>
   
  use `` instead of ''  (backtick)
```

[Setting background image as prop in react](https://stackoverflow.com/questions/49740341/setting-background-image-as-prop-in-react) 





## 16-17. Services and portfolio pages part 1-2

```jsx
<i className={`fas ${this.props.icon} fa-stack-1x fa-inverse`}></i>
```



Portfolio grid

* 





#### 18-19 Working with forms in React part 1-2

```jsx
                          <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" 
                          data-validation-required-message="Please enter your name."
                          value = {this.state.name}
                          onChange={e => this.setState({name : e.target.value })}
                          
                          />
```

