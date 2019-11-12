```
export MapboxAccessToken=pk.eyJ1Ijoiamluc2FuaXR5IiwiYSI6ImNrMG1wNXRrczE5ZmYzbXFzNDdzZGl4a3oifQ.-HWLLfoN74VMW9ml3XBT9w

```

How to load files without messing with processors and without using drag and drop? #162

* [The load data section](http://vis.academy/#/kepler.gl/2-load-data) walks through importing a raw data file and then manually choosing which processor to use, either `processCsvData()` or `processGeojson()`





### 汉化UI

* default-settings.js 中修改side panel 中的英文

  

* ![image-20190916161307937](https://ws3.sinaimg.cn/large/006y8mN6ly1g721xwo9p3j30u00z2dr3.jpg)

![image-20190916161640467](https://ws3.sinaimg.cn/large/006y8mN6ly1g7221j9gazj30u00ugk7i.jpg)

* ![image-20190916162625915](/Users/jinsanity/Library/Application Support/typora-user-images/image-20190916162625915.png)

* [react中英文切换二](https://blog.csdn.net/qq_35484341/article/details/81774180) 

* [基于react-intl实现手动国际化切换](https://zhuanlan.zhihu.com/p/39732502) 
* [在 React 项目中使用 React-intl 实现多语言支持](https://segmentfault.com/a/1190000005824920#articleHeader5)







## 组件

* ![image-20190922232326820](https://ws1.sinaimg.cn/large/006y8mN6ly1g79c3hpwclj312s0dejy4.jpg)

    * 修改 /Users/jinsanity/Documents/uOS/prototype/utb.cloud/utb.cloud/uOS/0-starting-code/node_modules/kepler.gl/dist/components/map/map-popover.js  组件
    `dist`
    
* [javascript – src和dist文件夹的作用是什么？](https://codeday.me/bug/20170628/31552.html) 

    ```
    src /代表源，并且是缩小或级联或其他编译之前的原始代码 – 用于读取/编辑代码。
    dist /代表分布，是缩小/连接的版本 – 实际上用于生产站点。
    ```

    





Root
v Provider
v Router
v RouterContext
AppConnect
App
v div
Autosizer
d
Container Connect
v Container
WithConnectselector
Kep lerGLConnect
KeplerGL
w Theme rovider
styled div
SidePanel
Bottomwidget
Modalwrapper