



### [Destination:Web] Exploring large-scale geospatial data on the web with Kepler.g  [video](https://www.youtube.com/watch?v=i2fRN4e2s0A) 

* Test to Failure
  * ![image-20191015115528142](https://ws3.sinaimg.cn/large/006y8mN6ly1g7zdgr0t68j30oi0g0ae0.jpg)
  * Example UberPool
    (Two weeks)
    * 1st Try : d3
      2nd Try: QGIS
      3rd Try: python+d3
      4th Try: animation
  * common Process of Geospatial Data Visualization
    ![image-20191015120127987](https://ws4.sinaimg.cn/large/006y8mN6ly1g7zdmwzix2j31b40l0qae.jpg)

#### Kepler.gl

##### 	Feature

* WebGl based
  GPU Calculation
  Mapping visualization Layers
  Multi Dimensional Visual Encoding
  Client Side Data Filtering
  Flexible interaction
  On the Fly Geo Aggregation

##### Demo

* Load Data
* Filtering data
  * Time filter
  * Time Playback
  * Range Filter
  * Single Selection
  * Multi selection
* Interaction with data
  1. Tooltip
  2. Brushing
* On the Fly Aggregation
  *  Grid
  * Hexin
  * Heatmap
  * Aggregation by Avg, Sum,
    Mean Min and max
* Geometry Layers
  * Geojson
  * WKT



#### Behind Kepler. gl

Tech Stack and Architecture
Packaging and open source effort

![image-20191015121332753](https://ws4.sinaimg.cn/large/006y8mN6ly1g7zdzhystij31ac0kinai.jpg)



* WebGL
  Mapbox GL
  React-map-gl
  Deck.gl
  Luma.gl
  Kepler.gl

26:36 / 34:26 

![image-20191015121640261](https://ws4.sinaimg.cn/large/006y8mN6ly1g7ze2qhs7aj31bw0m2120.jpg)



##### Performance

Handling map projection and mouse Interaction in GPU

* CPU : Javascript
* GPU: GLSL Shaders
  * [GLSL Shaders - Game development | MDN](https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders) 



##### Packaging and open Source

Road to Open Source a Single Page App

![image-20191015122521512](https://ws2.sinaimg.cn/large/006y8mN6ly1g7zebsh34kj31vu0gm7m3.jpg)

   



React way

* ![image-20191015145419230](https://ws2.sinaimg.cn/large/006y8mN6ly1g7zims0qsjj31q40tm150.jpg)

 

Dependency Injection

* ![image-20191015145518899](https://ws3.sinaimg.cn/large/006y8mN6ly1g7zinsucenj31kc0u0dsq.jpg)

![image-20191015145608279](https://ws1.sinaimg.cn/large/006y8mN6ly1g7zionr62vj30vi09ojuo.jpg)

![image-20191015145617565](https://ws4.sinaimg.cn/large/006y8mN6ly1g7zioswlzzj30w60gogrq.jpg)