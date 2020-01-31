TRF文件解析geojson_node

`装备` CORSIM仿真器装备集 -> `组件`   TRF解析geojson_Node  [link](http://utb.cloud/uDev/item/75396443fue236fu4018fuac0afuaa357bec11b2)  


#### 功能介绍

​	此装备能够解析TRF文件中的`节点`(node)信息，并且将节点信息储存于geojson格式的文件中，实现从TRAFED编辑器中的直角坐标系向实际的地理坐标系的投影，主要用于路网信息在实际地图中展示。

#### 数据文件

输入文件：

* 记录类型为195的csv文件
  
  * 从`TRF文件解析csv`装备中获得，eg: df_type195.csv
  
* 节点的实际坐标

  * 文件geojson格式

    可以通过地理坐标信息软件--QGIS生产，对照TRFAED编辑器中的节点位置进行在新建layer中实际标定，最后将layer导出成geojson文件

  * 标定的节点数根据实际点的个数，以及手工工作量灵活指定.
    注：投影的坐标为估计坐标会存在部分误差； 一般情况下，标定的节点越多，投影坐标越准确。

输出文件

* 包含全网节点信息的geojson文件

#### 使用方法

1. 准备文件：`df_type195.csv`和`节点的实际坐标`
2. 上传`df_type195.csv`和`节点的实际坐标`到。。。
3. 点击运行
4. 下载`geo_node`文件



