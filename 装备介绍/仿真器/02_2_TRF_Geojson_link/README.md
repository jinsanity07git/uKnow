TRF文件解析geojson_link

#### 功能介绍

​	此装备能够解析TRF文件中的`路段`(link)信息，并且将路段信息储存于geojson格式的文件中，实现从TRAFED编辑器中的直角坐标系向实际的地理坐标系的投影，主要用于路网信息在实际地图中展示。

#### 数据文件

输入文件：

* 记录类型为195的csv文件
  - 从`TRF文件解析csv`装备中获得，eg: df_type195.csv

* 记录类型为11或者19的csv文件
  
  * 从`TRF文件解析csv`装备中获得，eg: df_type11.csv `or` df_type19.csv
  
* `geo_node`文件

  * 需要从装备`TRF文件解析geojson_node`的输出中中获取

    


输出文件

* `geo_node`文件
  * 如果输入文件中的`记录类型`为11，则输出路面道路
  * 如果输入文件中的`记录类型`为19，则输出高架道路

#### 使用方法

1. 准备文件：`df_type195.csv`, `df_type11.csv `或者 `df_type19.csv `以及`geo_node`文件
2. 上传上述文件到。。。
3. 点击运行
4. 下载`geo_link`文件



