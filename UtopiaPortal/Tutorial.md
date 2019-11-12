###   Building a ReactJS Website

#### 11. React website setup

* Web template [link](https://startbootstrap.com/themes/agency/)

```bash
(base) jinsanity-pro:UtopiaPortal jinsanity$ create-react-app ulander



(base) jinsanity-pro:UtopiaPortal jinsanity$ cd ulander

(base) jinsanity-pro:ulander jinsanity$ npm start
```



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